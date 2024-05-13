"use client";

import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { api } from "~/trpc/react";
import { PokemonRow } from "./PokemonRow";
import { type PokemonWithTypes } from "~/types/pokemon";

export function PokemonForm() {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState<PokemonWithTypes | null>(null);

  const { data, refetch, isFetching, error } = api.pokemon.getPokemon.useQuery(
    name,
    {
      enabled: false,
    },
  );

  useEffect(() => {
    if (data) {
      setPokemon(data);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await refetch();
      if (result.data) {
        setPokemon(result.data);
      }
    } catch (err) {
      console.error("Error fetching Pokemon:", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <TextField
        label="Pokemon Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" variant="contained" disabled={isFetching}>
        {isFetching ? "Fetching..." : "Get Pokemon"}
      </Button>
      {error && <p>Error fetching Pokemon: {error.message}</p>}
      {pokemon && <PokemonRow {...pokemon} />}
    </Box>
  );
}
