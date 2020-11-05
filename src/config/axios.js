import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://tinder-clone-b.herokuapp.com',
})

export default instance;