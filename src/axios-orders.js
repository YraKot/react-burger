import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c0266.firebaseio.com/'
});

export default instance;