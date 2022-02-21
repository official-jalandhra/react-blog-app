import React, { Component } from 'react'
import Heading from './heading'
import '../styles/latestStories.css'
import eastRedArrow from '../photos/east_red_24dp.svg'
import Story from './Story'

export default class LatestStories extends Component {
  render() {
    return (
      <>
        <div className='latestStories'>
            <Heading heading="Latest Stories"/>
                
            <div className='story-container'>
                <Story category="TECH " date="/ TODAY AT 11:45"/>
                    <div className='verticleHR'> </div>
                <Story category="STYLE " date="/ AUGUST 21, 2022"/>
                    <div className='verticleHR'> </div>
                <Story category="TECH " date="/ AUGUST 21, 2022"/>
            </div>
            <div className='view-more'> 
                VIEW MORE <img src={eastRedArrow} alt='redArrow'/>
            </div>
        </div>
      </>
    )
  }
}
