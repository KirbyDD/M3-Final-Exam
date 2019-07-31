import React from 'react';
import './Donation.css'

const Donation = (props) => {
  return (
    <article className='donation'>
      <h3>NAME</h3>
      <p>{props.name}</p>
      <h3>DONATION</h3>
      <p>${props.donation}</p>
    </article>
  )
}

export default Donation;