import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCarDetail, clearDetail } from '../actions'
import { bindActionCreators } from 'redux';

class Car extends Component {

  componentWillMount () {
    this.props.getCarDetail(this.props.match.params.id)
  }

  componentWillUnmount () {
    this.props.clearDetail()
  }
  

  renderDetail = ({ detail }) => {
    if (detail) {
      return detail.map((item) => {
        return (
          <div className="car_detail" key={item.id}>
            <img src={`/images/${item.image}`} alt={item.id} />
            <div className="content">
              <h2>{item.model}</h2>
              <h4>{item.brand}</h4>
              <p>{item.description}</p>
            </div>
          </div>)
      })
    }
  }

  render () {
    return (
      <div>
        {this.renderDetail(this.props.cars)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cars: state.cars
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getCarDetail,clearDetail }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Car)