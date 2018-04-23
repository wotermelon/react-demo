import React, { Component } from 'react'
import './App.css'
import FilterProductTable from './components/FilterProductTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterProductTable></FilterProductTable>
      </div>
    )
  }
}

export default App
