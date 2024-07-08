import axios from 'axios';
import { getCookie } from '../services/MaPiantalaCookies.service';


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`
    }
});



