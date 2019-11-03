import React from 'react';
import '../styles/VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="header" style={{marginTop: '5px'}}> {video.snippet.title} </div>
    </div>
  );
};

export default VideoItem;
