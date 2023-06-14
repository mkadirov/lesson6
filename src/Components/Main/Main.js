import React, { Component } from 'react'
import "./Main.css"
import ProductCard from '../ProductCard';

export default class Main extends Component {
  render() {
    const {products} = this.props;

    return (
      <div className={`main ${this.props.night && "darkMain"}`}>

        <div className="row">
            {
                products.map(product => {
                    return  <ProductCard product={product}  buy = {() => this.props.buy(product)}/>
                })
            }
        </div>

      </div>
    )
  }
}

