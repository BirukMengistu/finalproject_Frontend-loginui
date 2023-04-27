import React, { useState } from 'react'
import Cookies from 'js-cookie'

import { useForm } from '@mantine/form';
import { TextInput, Text ,Anchor,Title, Button,Group, Box } from '@mantine/core';
import { LoginAuth }  from '../hooks/useLogin'; 
import {useIsAuthenticated} from 'react-auth-kit';
import { useSignIn } from 'react-auth-kit'
import { Notifications }  from '@mantine/notifications'
import {CookieOptions} from '../utils/api'
export const Login = (props) => 
{   const options = CookieOptions()
  const [user, setUser]= useState('')
   
   const signIn = useSignIn() 
   const iSAuth = useIsAuthenticated()
    const form = useForm({
        initialValues: {
         
          email: '', 
          password: ''
        },
      });
      const createCookies =(data)=>{
         console.log(data)
        if(data.statusCode === 200){      
          if(signIn(
              {
                  token: data.token,
                  userId:data.userId,
                  expiresIn:300000,
                  tokenType: "Bearer",
                  authState: data.authUserState,  
              }
           
          ))
          { 
         
           Cookies.set(`userId`, data?.user.userId.toString(), options)
           Cookies.set(`token`, data?.token, options)
           // eslint-disable-next-line no-lone-blocks
          if(data.statusCode === 200){
    
           Notifications.show({
             title: 'Login Successful',
             message: 'Welcome to Professional Hub',
             type: 'success'
           })
    
           setTimeout(()=>{
             return window.location.replace('http://localhost:3536/')
           },3500)
          }
           
           
          }else {
    
           Notifications.show({
             title: 'Login Faild',
             message: 'Login failed used incorrect email or Password',
             type: 'error'
           })
           return window.location.replace('http://localhost:3535/')
          }
      }
        
      
      }
         
     
     const handleLogin= async (values)=>{
      
      
       const response  =  await LoginAuth('/users/login' , values)
       const userData = response.data
       createCookies(userData)
     }

   
      return (

        <>{!iSAuth() && <Box maw={320} mx="auto" mt='4'
        sx={(theme) => ({
            display: 'block',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[7],
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: 'pointer',
    
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            },
          })}
              >  <>
               <Title color='dimmed' order={2} align='center'>
                        Welcome back!
                    </Title>
                    <Text color='dimmed' size='sm' align='center' mt={5}>
                    Don't have an account yet?
                       <Text color='dimmed' size='sm' align='center' mt={5}>
                          <Anchor href="/signup" target="_blank"  size='sm' >
                              Register
                          </Anchor>
                        </Text>
                  </Text>
                 </>
                   
          <TextInput 
          label="Email" 
          placeholder="Name" 
          {...form.getInputProps('email')} />
          <TextInput mt="md" label="Password" placeholder="Email" {...form.getInputProps('password')} />
    
          <Group position="center" mt="xl">
            <Button variant="outline" onClick={() => handleLogin(form.values)}>
              login
            </Button>
            <Button variant="outline" onClick={() => form.reset()}>
              Register
            </Button>
          </Group>
      </Box>
       }
        </>
        )

 }



/*  response.then((res)=>{
  )
   
} */