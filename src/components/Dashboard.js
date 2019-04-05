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
       this.getHouses() 
    }

    getHouses = () => {
        axios.get('/api/houses')
        .then(res => {
            console.log(res.data)
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
          {this.state.houses.map((item, i) => {
                return <House
                key={i} house={item} id={item.id}/>
          })}
      </div>
    );
  }
}

export default Dashboard