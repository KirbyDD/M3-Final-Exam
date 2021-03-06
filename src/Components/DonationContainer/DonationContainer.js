import React from 'react';
import {connect} from 'react-redux';
import './DonationContainer.css';
import Donation from '../Donation/Donation'

const DonationContainer = (props) => {
  let list = props.donations.map(donation => {
    return <Donation {...donation} key={donation.id}/>
  })
  return (
    <aside>
      <h2>List of Donations</h2>
      {list}
    </aside>
  )
}

const mapStateToProps = store => ({
  donations: store.donations
})

export default connect(mapStateToProps)(DonationContainer)