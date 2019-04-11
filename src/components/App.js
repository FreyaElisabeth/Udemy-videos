import React from 'react'

import './App.css'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '50px' }}>
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <div className="ui segment all-results">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    )
  }

  onSearchTermSubmit = async searchTerm => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    })
    this.setState({ videos: response.data.items })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }
}

export default App
