import React from 'react';
import PropTypes from 'prop-types';
import './VideoListEntry.css';

const VideoListEntry = ({ video, handleVideoListEntryClick }) => (
  <li onClick={(event) => {handleVideoListEntryClick(video)
  }} className="media video-list-entry">
    <div className="media-left media-middle">
      <img src={video.snippet.thumbnails.default.url} />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title"> {video.snippet.title} </div>
      <div className="video-list-entry-description"> {video.snippet.description} </div>
    </div>
  </li>
)

VideoListEntry.propTypes = {
  video: PropTypes.objectOf({
    snippet: PropTypes.objectOf({
      thumbnails: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
  handleVideoListEntryClick: PropTypes.func
  })
}

export default VideoListEntry;

