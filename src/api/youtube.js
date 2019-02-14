import axios from 'axios';

const KEY = 'AIzaSyA8Pe9qy0a-QWfik_MCqN0shYqntYNN7WI';

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});