import axios from 'axios';

const api = axios.create({
  baseURL: 'https://react-node-app-backend.herokuapp.com',
});

export default api;
