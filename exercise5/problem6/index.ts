
async function fetchPokemon(pokemonName: string) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("smth went wrong");
        }
        const pokemon = await response.json();
        const result = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprites.front_default,
        };
        return result;
    } catch (error) {
        return Promise.reject(new Error("smth went wrong"));
    }
}



export default fetchPokemon;
