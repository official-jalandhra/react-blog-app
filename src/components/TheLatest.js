import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/theLatest.css'
import Card from './card'
import Heading from './heading'

export default class TheLatest extends Component {
  render() {
    return (
      <>
      <div className='latest-container'>
        <Heading heading="The Latest"/>
        <div className='card-container'>
            <Link to="/ReadMode"> <Card/> </Link>
            <Link to="/ReadMode"> <Card/> </Link>
            <Link to="/ReadMode"> <Card/> </Link>
          
        </div>
      </div>
      </>
    )
  }
}
