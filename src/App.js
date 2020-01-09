import React from 'react';
import $ from 'jquery'

import './App.css';

import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoList from './VideoList/VideoList';
import Nav from './Nav/Nav';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      videos: [],
      currentVideo: null
    }
  }

  componentDidMount() {
    this.searchYoutube('kitten mittens')
  }

  searchYoutube = (queryString) => {
    return $.get('https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      key: 'AIzaSyDmdOscLzRKkDlmS8sEU3ZMOwTA_0UQzv8',
      q: queryString,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true'
    })
    .then((results) => {
      this.setState({
        videos: results.items
      })
    }) 
    .catch((error) => {
      console.error(error)
    })
  }

  setCurrentVideo = (video) => {
    this.setState({
      currentVideo: video
    })
  }

  componentDidUpdate() {
    console.log('updated App component')
  }

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={ this.searchYoutube } />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={ this.state.currentVideo }/>
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videos}
              handleVideoListEntryClick={ this.setCurrentVideo }
            />
          </div>
        </div>
      </div>
    )
  }
}

/* 
App
  - Nav
    - Search
  - VideoPlayer  <-- RESPONSE HAPPENS HERE
  - VideoList 
    - VideoListEntry  <-- DATA IS HERE

*/

export default App;

