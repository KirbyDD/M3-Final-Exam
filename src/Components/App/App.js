import React, {Component} from 'react';
import {fetchAnimals, fetchDonations, postDonation} from '../../apiCalls';
import {connect} from 'react-redux'
import {gatherData, isLoading, hasErrored, gatherDonations} from '../../actions/index'
import './App.css';
import AnimalContainer from '../AnimalContainer/AnimalContainer';
import DonationContainer from '../DonationContainer/DonationContainer';
import DonationForm from '../DonationForm/DonationForm';


class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    let data;
    let donations;
    try{
      this.props.loading(true)
      data = await fetchAnimals();
      this.props.handleFetch(data)
      donations = await fetchDonations()
      this.props.handleSecondFetch(donations)
      this.props.loading(false)
    } catch {
      this.props.handleError(data)
      this.props.loading(false)
    }
  }

  postingDonation = async (donation) => {
    let donations;
    try {
      this.props.loading(true)
      await postDonation(donation)
      donations = await fetchDonations();
      this.props.handleSecondFetch(donations)
      this.props.loading(false)
    } catch {
      this.props.handleError('Error Posting Donation')
      this.props.loading(false)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Final Exam</h1>
        <DonationForm postingDonation={this.postingDonation} />
        <div className='main-section-style'>
          <AnimalContainer />
          <DonationContainer />
        </div>
        {this.props.isLoading &&
          <h2>Loading. Please Wait...</h2>
        }
        {this.props.hasErrored && 
          <h2>There was an error fetching the poor animals</h2>
        }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  isLoading: store.isLoading,
  hasErrored: store.hasErrored
})

const mapDispatchToProps = dispatch => ({
  handleFetch: data => dispatch(gatherData(data)),
  handleSecondFetch: donations => dispatch(gatherDonations(donations)),
  loading: bool => dispatch(isLoading(bool)),
  handleError: message => dispatch(hasErrored(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
