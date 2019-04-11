import React from 'react'

import './VideoItem.css'

const VideoItem = ({ video }) => {
  const { title, thumbnails } = video.snippet
  const { videoId } = video.id

  return (
    <div className="item video-item content" key={videoId}>
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="header">{title}</div>
    </div>
  )
}

export default VideoItem
