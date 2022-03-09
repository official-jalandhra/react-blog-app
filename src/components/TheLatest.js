import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/theLatest.css'
import Card from './card'
import Heading from './heading'
import photo1 from '../photos/tech1.webp'
import photo2 from '../photos/car1.webp'
import photo3 from '../photos/kabootar.webp'

const imageList =[
  {id:"1",photo: photo1, title:"Technology give the speed to world"},
  {id:"2",photo: photo2, title:"Awesome Car from the industry"},
  {id:"3",photo: photo3, title:"Some nature vibes from the sky"}
]
const images = imageList.map((item)=>{
  return(
    <Link to="/ReadMode"> <Card photo = {item.photo} title={item.title}/> </Link> 
  )
})

export default class TheLatest extends Component {
  render() {
    return (
      <>
      <div className='latest-container'>
        <Heading heading="The Latest"/>
        <div className='card-container'>
          {images}
        </div>
      </div>
      </>
    )
  }
}
