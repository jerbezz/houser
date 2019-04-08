import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import store, { UPDATE_HOUSE_IMG } from '../store'

class WizStep2 extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            house_img: reduxState.house_img
        }
    }

    componentDidMount(){
      store.subscribe(() => {
        const reduxState = store.getState()
        this.setState({
            house_img: reduxState.house_img
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
        type: UPDATE_HOUSE_IMG,
        payload: this.state.house_name
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
          <input placeholder='House Image URL' name='house_img' value={this.state.house_img} onChange={this.handleChange}></input>
          <Link to='/wizard'><button onClick={() => this.saveChanges()}>Previous Step</button></Link>
          <Link to='/wizard/stepthree'><button onClick={() => this.saveChanges()}>Next Step</button></Link>
          
      </div>
    );
  }
}

export default WizStep2