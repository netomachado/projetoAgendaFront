import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003/agenda',
});

export default api;