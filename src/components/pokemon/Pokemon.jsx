import React from 'react'
import './pokemon.styles.css'

const Pokemon = (props) => {
  const { pokemon } = props
  const onHeartClick = () => {
    console.log('pode favoritar')
  }
  const heart = '💘'
  console.log('pokemon', pokemon)
  return (
    <div className='pokemon-card'>
      <div className="pokemon-image-container">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-botton">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div className="pokemon-type-text" key={index}>
                  {type.type.name}
                </div>
              )
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pokemon