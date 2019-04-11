import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'

class App extends React.Component {
  state = {
    videos: []
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '50px' }}>
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <VideoList videos={this.state.videos} />
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
}

export default App
