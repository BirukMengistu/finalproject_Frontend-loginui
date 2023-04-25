import React ,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from 'react-auth-kit'
import { Loader, MantineProvider } from '@mantine/core'
import {BrowserRouter as Router}  from "react-router-dom";
/* import RouteComponent from './utils/routes'; */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MantineProvider
            withNormalizeCSS={true}
            withGlobalStyles={true}
            theme={{
              colors: {
                brand: [
                  '#FFF8E1',
                  '#FFECB3',
                  '#FFE082',
                  '#FFD54F',
                  '#FFCA28',
                  '#FFB300',
                  '#FFA000',
                  '#FF8F00',
                  '#FFD740',
                  '#FFC400'
                ]
              },
              fontFamily: 'Poppins, sans-serif',
              primaryColor: 'brand'
            }}
          >
            
                <AuthProvider authType = {'localstorage' | 'cookie' }
                              authName={'_auth'}
                              
                              cookieDomain={window.location.hostname}
                              cookieSecure={window.location.protocol === "https:"}>

                      {/*  <RouteComponent />    */}  
                      <Suspense fallback={<Loader />}>
                     
                         <App />
                  
                    </Suspense>        
                
              </AuthProvider>
   
  </MantineProvider>
  </React.StrictMode>
);

        
   
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
