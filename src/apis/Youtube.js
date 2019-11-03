import axios from 'axios';

const KEY = 'AIzaSyD-KMu5D8kUvQozv5_Zt4mhJOuiwt_m6rg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
