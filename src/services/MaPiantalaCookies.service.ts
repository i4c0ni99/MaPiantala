import Cookies from 'js-cookie'
import { User } from '../types/User.class';

export const getCookie =(cookie:string)=>{
    const result =Cookies.get(cookie)
    if(cookie == "user" && result)
    return JSON.parse(result);
    else
        return result    
}

export const setUserCookie = (user:User)=>{
   Cookies.set('user',JSON.stringify(user))
   window.location.reload()
}

export const setToken = (token:string)=>{
    Cookies.set('token', token)
    window.location.reload()
 }

 export const logOut = ()=>{
        Cookies.remove('user');
        Cookies.remove('token');
        window.location.href = '/home';
      
 }