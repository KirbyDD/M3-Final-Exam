import React from 'react';
import {connect} from 'react-redux';
import './DonatioContainer.css';

const DonationContainer = (props) => {
  let list = props.donations.map(donation => {
    return <Donation {...donation} />
  })
  return (
    <aside>
      {list}
    </aside>
  )
}

const mapStateToProps = store => ({
  donations: store.donations
})

export default connect(mapStateToProps)(DonationContainer)