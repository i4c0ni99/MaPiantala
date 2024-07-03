import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJNYXJpbyIsImxhc3ROYW1lIjoiUm9zc2kiLCJyb2xlIjoiVU5WRVJJRklFRCIsImlkIjoxLCJlbWFpbCI6Im1hcmlvcm9zc2lAbGl2ZS5jb20iLCJpYXQiOjE3MTk1MTU2MDIsImV4cCI6MTcyMDcyNTIwMn0.EWahuhOCwsveJPxujxiEa5nTiBvhqgb5--VNn35OaOU'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Sostituisci con il tuo URL di base
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

