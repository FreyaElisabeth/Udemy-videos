import axios from 'axios'

const KEY = 'AIzaSyBAKc5m4U7RRWDRsuXQjAsjVcIazSJJFIE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 8,
    key: KEY
  }
})
