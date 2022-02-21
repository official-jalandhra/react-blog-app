import React, { Component } from 'react'

import Header from './Header';
import VerticalGallary from './VerticalGallary';
import TheLatest from './TheLatest';
import LatestArticles from './LatestArticles';
import LatestStories from './LatestStories';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <VerticalGallary title="Title of Vertical gallary." date="Travel / August 21, 2020 "/>
        <TheLatest/>
        <LatestArticles/>
        <LatestStories/>
      </div>
    )
  }
}
