import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/story.css'
import Date from './Date'

export default class Story extends Component {
  render() {
    return (
      <>
      <div className='story-card'>
        <Link to="/ReadMode">
        <div className='story-heading'>
            Catch waves with <br/> an adventure guide
        </div>
       <p className='story-para'>
       Joshua Tree National Park is a vast protected California. It's characterized by rugged.Joshua Tree National Park is a vast protected California. It's characterized by rugged.Joshua Tree National Park is a vast protected California. It's characterized by rugged.Joshua Tree National Park is a vast protected California. It's characterized by rugged.
       </p>
        </Link>
       <Date category={this.props.category} date={this.props.date} color="color" />
      </div>
      </>
    )
  }
}
