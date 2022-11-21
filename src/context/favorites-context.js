import React, { createContext } from 'react'

export const FavoriteContext = createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;