import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1340e12fa6feb88d5fc00ebe6bbe9f2d4f80550b27d48de9147cd3407d7732d2',
  }
});