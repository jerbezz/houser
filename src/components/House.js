import React, { Component } from 'react';


class House extends Component {


    handleDeleteHouse = () => {
        let id = this.props.house.house_id
        this.props.deleteHouse(id)
      }



  render() {
      
    return (
      <div>
          <p><strong>Property Name: </strong>{this.props.house.house_name}</p>
          <p><strong>Address: </strong>{this.props.house.address}</p>
          <p><strong>City: </strong>{this.props.house.city}</p>
          <p><strong>State: </strong>{this.props.house.state}</p>
          <p><strong>Zip: </strong>{this.props.house.zip}</p>
          <button onClick={this.handleDeleteHouse}>X</button>
      </div>
    );
  }
}

export default House