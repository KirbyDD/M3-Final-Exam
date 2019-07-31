import React from 'react';

const AnimalCard = (props) => {
  return (
    <article>
      <img src={props.img} alt={props.name} /> 
      <h2>Name: {props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Description: {props.description}</p>
    </article>
  )
}

export default AnimalCard;