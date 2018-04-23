import React, { Component } from 'react'

class ProductTable extends Component {
  render () {
    const mapObj = {}
    const categoriesList = this.props.tableList.filter(item => {
      if (!mapObj[item.category]) {
        mapObj[item.category] = []
        mapObj[item.category].push(item)
        return true
      }
      mapObj[item.category].push(item)
      return false
    }).map(item => item.category)
    return (
      <div>
        <div><span>Name</span>|<span>Price</span></div>
        <div>
        {
          categoriesList.map(category => {
            return (
              <div key={category}>
                <h1>{category}</h1>
                <ul>
                  {
                    mapObj[category].map(item => (
                      <li className={item.stocked ? 'highlight' : ''} key={item.name}>
                        <span>{item.name}</span>|<span>{item.price}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default ProductTable
