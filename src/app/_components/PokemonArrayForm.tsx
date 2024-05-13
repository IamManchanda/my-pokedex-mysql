"use client";

import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { api } from "~/trpc/react";
import { PokedexTable } from "./PokedexTable";
import { type PokemonWithTypes } from "~/types/pokemon";

export function PokemonArrayForm() {
  const [names, setNames] = useState("");
  const [pokemons, setPokemons] = useState<PokemonWithTypes[] | null>(null);

  const { refetch, data, error } = api.pokemon.getPokemonArray.useQuery(
    names.split(",").map((name) => name.trim()),
    {
      enabled: false,
    },
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await refetch();
      if (result.data) {
        setPokemons(result.data);
      }
    } catch (err) {
      console.error("Error fetching Pokemon array:", err);
    }
  };

  useEffect(() => {
    if (data) {
      setPokemons(data);
    }
  }, [data]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <TextField
        label="Pokemon Names (comma separated)"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Get Pokemon
      </Button>
      {error && <p>Error fetching data: {error.message}</p>}
      {pokemons && <PokedexTable pokemons={pokemons} />}
    </Box>
  );
}
