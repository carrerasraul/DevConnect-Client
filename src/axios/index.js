import axios from 'axios';

export default axios.create({
  BASE_URL: 'https://devconnect-server.herokuapp.com/api',
});
