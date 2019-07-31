import React from 'react';
import {connect} from 'react-redux';
import AnimalCard from '../AnimalCard/AnimalCard';
import './AnimalContainer.css'

const AnimalContainer = (props) => {
  let list = props.animals.map(animal => {
    return <AnimalCard {...animal} key={animal.id}/>
  })
  return (
    <main className='animal-container'>
      {list}
    </main>
  )
}

const mapStateToProps = store => ({
  animals: store.animals
})

export default connect(mapStateToProps)(AnimalContainer);