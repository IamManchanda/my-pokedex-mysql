// src/app/_components/PokemonTypeSelection.tsx
import { useEffect, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { api } from "~/trpc/react";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

export function PokemonTypeSelection({
  selectedType,
  selectType,
}: PokemonTypeSelectionProps) {
  const [types, setTypes] = useState<string[]>([]);
  const { data, error } = api.pokemon.getAllTypes.useQuery();

  useEffect(() => {
    if (data) {
      setTypes(data);
    }
  }, [data]);

  return (
    <FormControl fullWidth>
      <InputLabel id="type-selection-label">Type</InputLabel>
      <Select
        labelId="type-selection-label"
        label="Type"
        value={selectedType ?? ""}
        onChange={(e) => selectType(e.target.value || undefined)}
      >
        <MenuItem value="">All</MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      {error && <p>Error fetching types: {error.message}</p>}
    </FormControl>
  );
}
