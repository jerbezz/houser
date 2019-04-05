import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import House from './House'
import axios from 'axios'


class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        }).catch(err => console.log('get all houses err', err))
    }



  render() {
    return (
      <div>
          Dashboard
          <Link to='/wizard'><button>Add New Property</button></Link>
          <House/>
      </div>
    );
  }
}

export default Dashboard