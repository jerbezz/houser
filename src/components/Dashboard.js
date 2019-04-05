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
        this.getHouses = this.getHouses.bind(this)
    }

    componentDidMount(){
       this.getHouses() 
    }

    getHouses() {
        axios.get('/api/houses')
        .then(res => {
            console.log(res.data)
            this.setState({
                houses: res.data
            })
        }).catch(err => console.log('get all houses err', err))
    }

    deleteHouse = id => {
        
        axios.delete(`/api/houses/${id}`).then(res => {
          this.getHouses()
        }).catch(err => {
            console.log('delete error', err)
        })
    }



  render() {
    return (
      <div>
          Dashboard
          <Link to='/wizard'><button>Add New Property</button></Link>
          {this.state.houses.map((item, i) => {
                return <House
                key={i} house={item} id={item.id}
                deleteHouse={this.deleteHouse}/>
          })}
      </div>
    );
  }
}

export default Dashboard