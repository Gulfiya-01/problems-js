async function fetchCharacterWithMovies(id: number) {
    try {
        const response = await fetch(`https://swapi.dev/api/${id}`);
        if (!response.ok) {
            throw new Error('smth went wrong');
        }
        const character = await response.json();
        const filmsDataPromises = character.films.map(async (url: string) => {
            const filmResponse = await fetch(url);
            if (!filmResponse.ok) {
                throw new Error('smth went wrong');
            }
            const filmData = await filmResponse.json();
            return filmData.title;
        });
        const filmsData = await Promise.all(filmsDataPromises);
        const result = {
            name: character.name,
            films: filmsData,
        };
        return result;
    } catch (error) {
        return Promise.reject(new Error('smth went wrong'));
    }
}

export default fetchCharacterWithMovies;




