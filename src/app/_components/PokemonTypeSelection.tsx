import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

export function PokemonTypeSelection({
  selectedType,
  selectType,
}: PokemonTypeSelectionProps) {
  const types = [
    "grass",
    "fire",
    "water",
    "electric",
    "bug",
    "poison",
    "flying",
    "normal",
  ];

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
    </FormControl>
  );
}
