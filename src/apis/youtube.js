import axios from 'axios';

const KEY = 'AIzaSyCsVoOcK9kxBkQkqFENzZGRSVBUl1Jt9_g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: `${KEY}`,
        maxResults: 5
    }
});
