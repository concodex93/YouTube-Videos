import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div class="ui active centered inline loader"></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <div className="content">
        <p> {video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
