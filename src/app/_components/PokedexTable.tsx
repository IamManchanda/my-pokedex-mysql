import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import { type PokemonWithTypes } from "~/types/pokemon";

type PokedexTableProps = {
  pokemons: PokemonWithTypes[];
};

export function PokedexTable({ pokemons }: PokedexTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Types</TableCell>
          <TableCell>Sprite</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pokemons.map((pokemon) => (
          <TableRow key={pokemon.id}>
            <TableCell>{pokemon.id}</TableCell>
            <TableCell>{pokemon.name}</TableCell>
            <TableCell>{pokemon.types.join(", ")}</TableCell>
            <TableCell>
              <Avatar src={pokemon.sprite} alt={pokemon.name} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
