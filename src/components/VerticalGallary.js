import React, { Component } from 'react'
import '../styles/verticalGallary.css'
import Date from './Date';
import LeftGallary from './LeftGallary';


export default class VerticalGallary extends Component {
  render() {
    return (
      <>
      <div className='container'> 
        <div id='gallary'>
            <div className='gallary-title'>
            Title of vertical Gallary
            </div>
            <div className='gallary-date'>
            <Date category="Travel" date=" / January 22, 2022"/>
            </div>
        </div>
        <div className='left-container'>
            <div className='left-image'>
                <LeftGallary image="left-gallary1"/>
            </div>
            <div className='left-image'>
                <LeftGallary image="left-gallary2"/>
            </div>
        </div>
      </div>
       </>
    )
  }
}
