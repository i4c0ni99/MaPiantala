import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const setAuthToken = (token:string) => {
  if (token) {
    console.log(token)
    axiosInstance.defaults.headers.common['Authorization'] = ` Bearer ${token}` ;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};



