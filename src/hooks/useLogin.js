

import axios from 'axios';
import { API_URL } from '../utils/routes';
export const  LoginAuth = (apiAdd , values) =>{
    
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...',
        'Access-Control-Allow-Origin' :'*'
      }
     
      const logResponse =   axios.post(API_URL+apiAdd, values,{
        headers: headers
      }) 
      return logResponse 
    
}
  