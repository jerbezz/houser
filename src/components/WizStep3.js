import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import store, { UPDATE_MORTGAGE, UPDATE_RENT } from '../store'

class WizStep3 extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount(){
      store.subscribe(() => {
        const reduxState = store.getState()
        this.setState({
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        })
      })
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    saveChanges() {
      // Send data to Redux state
      store.dispatch({
        type: UPDATE_MORTGAGE,
        payload: this.state.mortgage
      })
      store.dispatch({
        type: UPDATE_RENT,
        payload: this.state.rent
      })
    }

    createHouse = () => {
        const {house_name, address, city, state, zip} = this.state
         axios.post('/api/houses', {house_name, address, city, state, zip})
         .then(res=> {
        this.setState({
            house_name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        })
     this.props.history.push('/')
      })
      .catch((err)=> console.log(err))
      
    }


  render() {
    //   console.log(this.state)
    return (
      <div>
          <div>
            Add New Listing
             <Link to='/'><button>Cancel</button></Link>
          </div>
          <input placeholder='Monthly Mortgage Amount' name='mortgage' value={this.state.mortgage} onChange={this.handleChange}></input>
          <input placeholder='Desired Monthly Rent' name='rent' value={this.state.rent} onChange={this.handleChange}></input>
          
          <Link to='/wizard/steptwo'><button onClick={this.saveChanges()} >Complete</button></Link>
          <Link to='/'><button onClick={this.saveChanges()} onClick={this.createHouse}>Complete</button></Link>
          
      </div>
    );
  }
}

export default WizStep3