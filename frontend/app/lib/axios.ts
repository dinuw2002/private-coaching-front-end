import axios from 'axios';

const api = axios.create({
  baseURL:  'https://private-coaching-back-end.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;