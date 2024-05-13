"use client";

import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { api } from "~/trpc/react";
import { PokemonTypeSelection } from "./PokemonTypeSelection";
import { PokedexTable } from "./PokedexTable";
import { type PokemonWithTypes } from "~/types/pokemon";

export function FilterablePokedexTable() {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined,
  );
  const [filteredPokemons, setFilteredPokemons] = useState<
    PokemonWithTypes[] | null
  >(null);

  const { refetch, error } = api.pokemon.getPokemonByType.useQuery(
    { types: selectedType ? [selectedType] : [] },
    {
      enabled: !!selectedType,
    },
  );

  useEffect(() => {
    if (selectedType) {
      refetch()
        .then((result) => {
          if (result.data) {
            setFilteredPokemons(result.data);
          }
        })
        .catch((err) => {
          console.error("Error fetching Pokemon by type:", err);
          setFilteredPokemons(null);
        });
    }
  }, [selectedType, refetch]);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      {error && <p>Error fetching data: {error.message}</p>}
      {filteredPokemons && <PokedexTable pokemons={filteredPokemons} />}
    </Box>
  );
}
