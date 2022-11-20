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