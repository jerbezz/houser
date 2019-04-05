import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class WizStep3 extends Component {
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
          <input placeholder='Monthly Mortgage Amount' name='mortgage' value={this.state.house_name} onChange={this.handleChange}></input>
          <input placeholder='Desired Monthly Rent' name='rent' value={this.state.address} onChange={this.handleChange}></input>
          
          <Link to='/'><button onClick={this.createHouse}>Complete</button></Link>
          
      </div>
    );
  }
}

export default WizStep3