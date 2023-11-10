async function fetchPokemons(pokemonNames: string[]) {
    try {
        const pokemons = await Promise.all(
            pokemonNames.map(async (name) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!response.ok) {
                    throw new Error("smth went wrong");
                }
                return response.json();
            })
        );

        const result = pokemons.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprites.front_default,
          }));
      
        
        return result;
    } catch (error) {
        return Promise.reject(new Error("smth went wrong"));
    }
}

export default fetchPokemons;
