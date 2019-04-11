import axios from 'axios'
import { YOUTUBE } from './.credentials'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 8,
    key: YOUTUBE
  }
})
