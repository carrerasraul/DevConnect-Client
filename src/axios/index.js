import axios from 'axios';

export default axios.create({
  baseURL: 'https://devconnect-server.herokuapp.com/api',
});
