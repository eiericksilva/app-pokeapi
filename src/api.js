 /* Exportar métodos que lidam com a API */

 export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json();
        
    } catch (error) {
        console.log(`api error: ${error}`)
    }
 }

 export const getPokemons = async (limit = 25, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json();
        
    } catch (error) {
        console.log(`api error: ${error}`)
    }
 }
 export const getPokemonsData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json();
        
    } catch (error) {
        console.log(`api error: ${error}`)
    }
 }