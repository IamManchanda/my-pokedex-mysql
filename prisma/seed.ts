import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface PokemonAPIResponse {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

interface PokemonListResponse {
  results: { name: string }[];
}

async function main() {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((res) => res.json() as Promise<PokemonListResponse>)
    .then((data) => data.results.map((pokemon) => pokemon.name));

  for (const name of pokemons) {
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json() as Promise<PokemonAPIResponse>)
      .then((data) => ({
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map((t) => t.type.name),
      }));

    const pokemon = await prisma.pokemon.create({
      data: {
        name: pokemonData.name,
        sprite: pokemonData.sprite,
      },
    });

    await prisma.pokemonType.createMany({
      data: pokemonData.types.map((type) => ({
        type,
        pokemonId: pokemon.id,
      })),
    });

    console.log(
      `Created pokemon with id: ${pokemon.id} and name: ${pokemon.name}`,
    );
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
