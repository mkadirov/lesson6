import React, { Component } from 'react'
import "./Sidebar.css"

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
  render() {

   

    return (
        <div className={`sidebar ${this.props.hide && "hide"} ${this.props.night && "dark"}`} >
        <div className='d-flex justify-content-between align-items-center'>
          <h2>Menu</h2>
          <button className="btn btn-danger" onClick={() => {
            this.props.changeHide(true)
          }}>X</button>
        </div>
      </div>
    )
  }
}
