import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleSearch (e) {
    this.props.search(e.target.value)
  }

  handleCheck (e) {
    this.props.check(e.target.value)
  }

  render () {
    return (
      <div>
        <input type="text" value={this.props.keyword} onChange={this.handleSearch} />
        <div>
          <label>
            <input type="checkbox" value={this.props.checked} onChange={this.handleCheck}/>
            Only show products in stock
          </label>
        </div>
      </div>
    )
  }
}

export default SearchBar
