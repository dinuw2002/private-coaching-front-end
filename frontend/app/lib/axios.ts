import axios from 'axios';

const api = axios.create({
  baseURL:  'https://private-coaching-back-end.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;