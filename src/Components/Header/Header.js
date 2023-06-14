import React, { Component } from 'react'
import "./Header.css"

export default class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      search: ""
    }
  }

  changeSeach =(value) => {
    this.setState({search : value})
  }


  showProducts = () => {

    const products = this.props.basket;
    let listProducts = "";

    products.map((product, index) => {
      listProducts += "" + (index +1) + " - " + product.title + "\n"
    })

    alert(listProducts);
  }

  render() {
    const num = this.props.basket.length;
    return (
      <header className={`shadow ${this.props.night && "darkHeader"}`}>
        <div className="container-box">

          <div className="logo">
            <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="" />
          </div>

          <div className="catalog">
           <button className="btn btn-danger catalogBtn" onClick={() => {
            this.props.changeHide(false)
           }}>
            Katalog
           </button>
          </div>

          <div className="input-box">
          <input value={this.state.search} className="input" placeholder='Search....' onChange={(event)=>{
           this.changeSeach(event.target.value)
          }} />
          <button className=" btn btn-danger" onClick={() => {
            this.changeSeach("")
          }}>
            Go
          </button>
          </div>

          <div className="nav">
            <div className='me-2'>
              <button className="day btn btn-warning" onClick={() => {
                this.props.changeNight(false)
              }}>Day</button>
              <button className="btn btn-dark night" onClick={()=>{
                this.props.changeNight(true)
              }}>Night</button>
            </div>
            
            <button className="btn btn-danger" onClick={this.showProducts}>Корзина
               {
                num != 0 ? <span className='badge badge-light'>{num}</span>:""
              }
            </button>
          </div>
        </div>
      </header>
    )
  }
}
