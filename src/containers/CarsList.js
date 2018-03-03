import React, { Component } from 'react'
import { connect } from 'react-redux'

class CarsList extends Component {

  listOfCars = ({ cars }) => {
    if (cars) {
      return cars.map((c) => {
        return (
          <div className="car_item" key={c.id}>
            {c.model}
          </div>
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