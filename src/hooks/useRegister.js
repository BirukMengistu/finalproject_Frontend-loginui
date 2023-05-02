

import axios from 'axios';
import { API_URL } from '../utils/routes';


// eslint-disable-next-line no-undef
export const RegAuth =   (apiAdd , values) =>{
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...',
        'Access-Control-Allow-Origin' :'*'
      }
       
      const regResponse = axios.post(API_URL+apiAdd, values,{
            headers: headers
          }) 
          return regResponse 
    
}