import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CarsList extends Component {

  listOfCars = ({ cars }) => {
    if (cars) {
      return cars.map((c) => {
        return (
          <Link to={`/cars/${c.id}`} className="car_item" key={c.id}>
            <div className="left">
              <img src={`/images/${c.image}`} alt={c.name} />
            </div>
            <div className="right">
              <h4>{c.model}</h4>
              <h6>{c.brand}</h6>
            </div>
          </Link>
        )
      })
    }
  }

  render () {
    return (
      <div className="cars_list">
        {this.listOfCars(this.props)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state);
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps, null)(CarsList)