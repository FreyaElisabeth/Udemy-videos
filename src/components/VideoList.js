import React from 'react'

import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  return videos.map(video => <VideoItem video={video} />)
}

export default VideoList
