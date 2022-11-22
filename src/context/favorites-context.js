import { createContext } from 'react'

export const FavoriteContext = createContext({
    favoritePokemons: [],
    setFavoritePokemons: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;