import React from 'react';
import PropTypes from 'prop-types';

import VideoListEntry from '../VideoListEntry/VideoListEntry';
import './VideoList.css'

const VideoList = ({ videos, handleVideoListEntryClick }) => videos.length === 0 ? <div>No videos</div> : (
  <div className="video-list">
    <ul className="list-unstyled">
      {
        videos.map((videoItem) => (
        <VideoListEntry 
          key={videoItem.id.videoId} 
          video={videoItem} 
          handleVideoListEntryClick={handleVideoListEntryClick}
        />
      ))
      }
    </ul>
  </div>
)

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  handleVideoListEntryClick: PropTypes.func
}

export default VideoList;

