import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            house_name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
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
      }).then((res)=> {

      }).catch((err)=>{ console.log(err)
        return err})
      
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
          <Link to='/wizard/steptwo'><button>Next Step</button></Link>
          
      </div>
    );
  }
}

export default Wizard