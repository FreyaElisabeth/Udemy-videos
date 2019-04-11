import React from 'react'

const VideoDetail = ({ video }) => {
  return video ? <div>{video.snippet.title}</div> : <div>Bitte wählen ...</div>
}
export default VideoDetail
