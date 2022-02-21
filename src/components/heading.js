import React, { Component } from 'react'
import '../styles/heading.css'

export default class Heading extends Component {
  render() {
    return (
      <div className='heading-container'>  
        <h1 className='heading'>{this.props.heading}</h1>
        <div className='headingUnderline'>
        </div>
      </div>
    )
  }
}
