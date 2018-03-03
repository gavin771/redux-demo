import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CarsList extends Component {

  listOfCars = ({ list }) => {
    if (list) {
      return list.map((c) => {
        return (
          <Link to={`/car/${c.id}`} className="car_item" key={c.id}>
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
        {this.listOfCars(this.props.cars)}
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