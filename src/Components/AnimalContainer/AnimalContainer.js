import React from 'react';
import {connect} from 'react-redux';

const AnimalContainer = () => {
  let list = this.props.animals.map(animal => {
    return <AnimalCard {...animal} key={animal.id}/>
  })
  return (
    <main>
      {list}
    </main>
  )
}

const mapStateToProps = store => ({
  animals: store.animals
})

export default connect(mapStateToProps)(AnimalContainer);