import { Box, Typography, Avatar } from "@mui/material";
import { type PokemonWithTypes } from "~/types/pokemon";

type PokemonRowProps = PokemonWithTypes;

export function PokemonRow({ id, name, types, sprite }: PokemonRowProps) {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Avatar src={sprite} alt={name} />
      <Typography variant="body1">
        #{id} - {name} ({types.join(", ")})
      </Typography>
    </Box>
  );
}
