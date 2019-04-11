import React from 'react'

import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails } = video.snippet

  return (
    <div
      className="item video-item content"
      onClick={() => onVideoSelect(video)}
    >
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="header">{title}</div>
    </div>
  )
}

export default VideoItem
