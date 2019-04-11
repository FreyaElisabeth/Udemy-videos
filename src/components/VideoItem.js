import React from 'react'

const VideoItem = ({ video }) => {
  const { title, thumbnails } = video.snippet
  const { videoId } = video.id

  return (
    <div className="ui segment" key={videoId}>
      <img src={thumbnails.default.url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default VideoItem
