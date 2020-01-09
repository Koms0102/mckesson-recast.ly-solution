import React from 'react';
import PropTypes from 'prop-types'

const VideoPlayer = ({ video }) => (!video ? <video autoPlay className="embed-responsive embed-responsive-16by9" src="./spinner.mp4" /> : (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen />
    </div>
    <div className="video-player-details">
      <h3>{ video.snippet.title }</h3>
      <div>{ video.snippet.description }</div>
    </div>
  </div>
))

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
}

export default VideoPlayer;
