import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCarDetail} from '../actions'
import {bindActionCreators} from 'redux';

class Car extends Component {
  
  componentWillMount () {
    this.props.getCarDetail(this.props.match.params.id)
  }
  
  render () {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    carDetails:state.carDetails
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getCarDetail},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Car)