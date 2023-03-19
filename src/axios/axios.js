import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://185.10.186.195:8000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;

