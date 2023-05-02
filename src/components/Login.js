import React, { useState } from 'react'
import Cookies from 'js-cookie'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
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
        if(data.statusCode === 200){      
          if(signIn(
              {
                  token: data.token,
                  userId:data._id,
                  expiresIn:300000,
                  tokenType: "Bearer",
                  authState: data.authUserState,  
              }
           
          ))
          { 
         
           Cookies.set(`userId`, data?.user._id.toString(), options)
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

        <>{!iSAuth() && <Container size={420} my={40}
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
         <Paper withBorder shadow="md" p={30} mt={30} radius="md">           
          <TextInput 
          label="Email" 
          placeholder="Name" 
          {...form.getInputProps('email')} />
          
          <PasswordInput label="Password" placeholder="Your password" required mt="md" {...form.getInputProps('password')} />
          <Group position="center" mt="xl">
            <Button variant="outline" onClick={() => handleLogin(form.values)}>
              login
            </Button>
            <Button variant="outline" onClick={() => form.reset()}>
              Register
            </Button>
          </Group>
      </Paper>    
      </Container>
       }
        </>
        )

 }





/* export function AuthenticationTitle() {
  return (
    <Container size={420} my={40}>
    
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
} */