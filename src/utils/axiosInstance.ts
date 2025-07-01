import axios from 'axios';
import { getCookie } from '../services/cookies.service';


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`
    }
});

export const loggedIn = async () => {
    try {
        const result = (await axiosInstance.get('user/me'));
        return result.status !== 401;
    } catch (error) {
        return false;
    }
}


