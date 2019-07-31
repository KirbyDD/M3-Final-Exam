import React from 'react';
import './AnimalCard.css'

const AnimalCard = (props) => {
  return (
    <article className='card'>
      <img src={props.img} alt={props.name} className='animal-img' /> 
      <h2>Name: {props.name}</h2>
      <h3>Species:</h3>
      <p>{props.species}</p>
      <h3>Description:</h3>
      <p>{props.description}</p>
    </article>
  )
}

export default AnimalCard;