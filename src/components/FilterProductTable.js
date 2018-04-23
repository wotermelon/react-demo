import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyworld: '',
      onlyProducts: false,
      list: [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ]
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleSearch (val) {
    const list = this.state.list.map(item => {
      item.stocked =  val ?  item.name.indexOf(val) !== -1 : false
      return item
    })
    this.setState({
      keyworld: val,
      list
    })
  }

  handleCheck (checked) {
    this.setState({
      onlyProducts: !!checked
    })
  }

  render () {
    return (
      <div>
        <SearchBar
          keyworld={this.state.keyworld}
          checked={this.state.checked}
          search={this.handleSearch}
          check={this.handleCheck}></SearchBar>
        <ProductTable tableList={this.state.list}></ProductTable>
      </div>
    )
  }
}

export default FilterProductTable