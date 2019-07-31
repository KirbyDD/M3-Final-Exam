import React, {Component} from 'react';
import {fetchAnimals, fetchDonations} from '../../apiCalls';
import {connect} from 'react-redux'
import {gatherData, isLoading, hasErrored, gatherDonations} from '../../actions/index'
import './App.css';
import AnimalContainer from '../AnimalContainer/AnimalContainer';

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
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Final Exam</h1>
        <AnimalContainer />
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
