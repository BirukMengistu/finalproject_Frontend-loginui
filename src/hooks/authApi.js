import axios from 'axios';


export const BASE_URL = 'http://localhost:9999/api/';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

