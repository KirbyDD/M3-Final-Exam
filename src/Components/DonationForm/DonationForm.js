import React, {Component} from 'react';

class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      donation: '',
      button: true,
      form: false
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let donation = {
      id: Date.now(),
      name: this.state.name,
      donation: this.state.donation
    }
    this.props.postingDonation(donation);
    this.resetForm();
  }

  toggleForm = () => {
    this.setState({
      button: false, form: true
    })
  }

  resetForm = () => {
    this.setState({
      button: true, form: false,
      name: '', donation: ''
    })
  }

  render() {
    return (
      <section>
        {this.state.button &&
        <button onClick={ e => this.toggleForm()}>Donate!</button>
        }
        {this.state.form &&
        <form>
          <input name='name' placeholder='Enter name..' value={this.state.name}  onChange={e => this.handleChange(e)}/>
          <input name='donation' placeholder='Enter donation..' value={this.state.donation} onChange={e => this.handleChange(e)}/>
          <button onClick={e => this.handleSubmit(e)}>Submit Donation!</button>
        </form>
        }
      </section>
    )
  }

}
export default DonationForm;