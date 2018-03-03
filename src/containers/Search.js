import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    }
  }

  searchCars = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  componentDidMount () {
    console.log(this.state);
  }

  render () {
    return (
      <div className="main_search">
        <form onSubmit={this.searchCars}>
          <input type="text" value={this.state.keyword} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default Search