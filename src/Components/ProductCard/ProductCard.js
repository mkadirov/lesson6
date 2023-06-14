import React, { Component } from 'react'
import "./ProductCard.css"

export default class ProductCard extends Component {

  render() {

    const {product} = this.props;
    return (
        <div className="col col-sx-6 col-md-4 col-lg-3 ">

        <div className="productCard">
        <div className="imgBox">
            <img src={product.imgSrc} alt="" />
        </div>
        <div className="infoBox">
            <div className="title">
            {product.title}
            </div>
            <div className="priceBox">
                <p className="price">{product.price} сум</p>
                <div className="priceMonth">
                <p>{product.priceMonth} сум / 12 мес</p>
                </div>
            </div>
            <div className="btnBox">
                <button className="btn border-danger" onClick={this.props.buy}>
                    Купить
                </button>
                <button className="btn border-danger">
                    В рассрочку
                </button>
            </div>
        </div>
        </div>

        </div>
    )
  }
}