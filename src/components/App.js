import React, { Component } from 'react'

// components
import Search from '../containers/Search'
import CarsList from '../containers/CarsList'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Search />
        <CarsList/>
      </div>
    )
  }
}

export default App