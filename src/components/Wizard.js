import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import store, { UPDATE_HOUSE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP } from '../store'

class Wizard extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            house_name: reduxState.house_name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    componentDidMount(){
      store.subscribe(() => {
        const reduxState = store.getState()
        this.setState({
            house_name: reduxState.house_name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
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
        type: UPDATE_HOUSE_NAME,
        payload: this.state.house_name
      })
      store.dispatch({
        type: UPDATE_ADDRESS,
        payload: this.state.address
      })
      store.dispatch({
        type: UPDATE_CITY,
        payload: this.state.city
      })
      store.dispatch({
        type: UPDATE_STATE,
        payload: this.state.state
      })
      store.dispatch({
        type: UPDATE_ZIP,
        payload: this.state.zip
      })
    }


  render() {
    //   console.log(this.state)
    return (
      <div>
          <div>
            Add New Listing
             <Link to='/'><button>Cancel</button></Link>
          </div>
          <input placeholder='House Name' name='house_name' value={this.state.house_name} onChange={this.handleChange}></input>
          <input placeholder='Address' name='address' value={this.state.address} onChange={this.handleChange}></input>
          <input placeholder='City' name='city' value={this.state.city} onChange={this.handleChange}></input>
          <input placeholder='State'name='state' value={this.state.state} onChange={this.handleChange}></input>
          <input placeholder='Zip Code' name='zip' value={this.state.zip} onChange={this.handleChange}></input>
          <Link to='/wizard/steptwo'><button onClick={() => this.saveChanges()}>Next Step</button></Link>
          
      </div>
    );
  }
}

export default Wizard