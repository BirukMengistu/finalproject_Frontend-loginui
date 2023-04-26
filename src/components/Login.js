import React from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Text ,Anchor,Title, Button,Group, Box } from '@mantine/core';
import { LoginAuth }  from '../hooks/useLogin'; 
import {useIsAuthenticated} from 'react-auth-kit';
import { useSignIn } from 'react-auth-kit'
import { redirect } from 'react-router-dom';
export const Login = (props) => 
{
   const signIn = useSignIn() 
   const iSAuth = useIsAuthenticated()
    const form = useForm({
        initialValues: {
         
          email: '', 
          password: ''
        },
      });
    
     
     const handleLogin=(values)=>{
     
       const response  = LoginAuth('/users/login' , values);;
       response.then((res)=>{
         if(res.status === 200){      
             if(signIn(
                 {
                     token: res.data.token,
                     expiresIn:300000,
                     tokenType: "Bearer",
                     authState: res.data.authUserState,
                     
                 }
             )){ 
              
              return <redirect to='localhost:9999/'  />
             }else {
                
             }
         }
           })

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