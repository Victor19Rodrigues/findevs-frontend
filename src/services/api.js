import axios from 'axios';
import {getToken} from './auth'

const api = axios.create({
  baseURL: 'https://3333-b6f71042-d042-4432-8322-2275dd59af62.ws-us02.gitpod.io',
});

api.interceptors.request.use(async config => {

  const token = getToken()
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
})


export default api;
