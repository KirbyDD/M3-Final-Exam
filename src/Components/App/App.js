import React, {Component} from 'react';
import {fetchAnimals} from '../../apiCalls';
import {connect} from 'react-redux'
import {gatherData, isLoading, hasErrored} from '../../actions/index'
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    let data;
    try{
      this.props.loading(true)
      data = await fetchAnimals();
      this.props.handleFetch(data)
      this.props.loading(false)
    } catch {
      this.props.handleError(data)
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Final Exam</h1>
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
  loading: bool => dispatch(isLoading(bool)),
  handleError: message => dispatch(hasErrored(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);