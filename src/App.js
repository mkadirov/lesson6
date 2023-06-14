import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import React, { Component } from 'react'
import Sidebar from './Components/Sidebar';

const products = [
  {
    imgSrc: "https://olcha.uz/image/220x220/products/2022-06-13/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0.jpeg",
    title: 'Samsung Galaxy A33 5G 6/128GB Черный',
    price: '3 675 000',
    priceMonth: '497 000'
  },
  {
    imgSrc: "https://olcha.uz/image/700x700/products/2022-04-08/samsung-galaxy-a33-5g-6128gb-belyy-45549-0.jpeg",
    title: 'Samsung Galaxy A33 5G 6/128GB Белый',
    price: '3 330 000',
    priceMonth: '455 000'
  },
  {
    imgSrc: "https://olcha.uz/image/700x700/products/2022-04-08/samsung-galaxy-a33-5g-6128gb-oranzhevyy-45551-0.jpeg",
    title: 'Samsung Galaxy A33 5G 6/128GB Оранжевый',
    price: '3 220 000',
    priceMonth: '432 000'
  },
  {
    imgSrc: "https://olcha.uz/image/700x700/products/2022-04-08/samsung-galaxy-a33-5g-6128gb-svetlo-siniy-45550-0.jpeg",
    title: 'Samsung Galaxy A33 5G 6/128GB Светло-синий',
    price: '3 150 000',
    priceMonth: '424 000'
  }
]

let nightMode;



export default class App extends Component {


  constructor(){
    super();

    this.state = {
      basket: [],
      hide : true,
      night : false 
    }
    this.componentDidMount();
  }

  changeNight = (v) => {
    this.setState({night : v});

    localStorage.setItem('nightMode', JSON.stringify(v));
   
  }

  changeHide = (v) => {
    this.setState({hide: v})
  }

  buy = (product) => {
    

    this.setState((state) => {
      let arr = [...state.basket];
      arr.push(product);
      return {basket: arr}
    })
  }

  componentDidMount() {
    const nightMode = localStorage.getItem('nightMode');
    if (nightMode) {
      this.setState({ night: JSON.parse(nightMode) });
    }
  }
  

  

  render() {

    return (
      <div>
     <Sidebar changeHide = {this.changeHide}
            hide = {this.state.hide}  night = {this.state.night}/>  

     <Header basket = {this.state.basket} changeHide = {this.changeHide}
            night = {this.state.night}  changeNight = {this.changeNight} />

     <Main products = {products}  buy={this.buy} night = {this.state.night}/>
    </div>

    )
  }
}





