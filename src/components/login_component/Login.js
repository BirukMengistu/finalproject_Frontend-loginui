import React from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Text ,Anchor,Title, Button,  createStyles,Group, Box } from '@mantine/core';
import { useSignIn } from 'react-auth-kit'
import axios from 'axios'
import { Link } from 'react-router-dom'
const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`
  }
}))
export const Login = (props) => {
  const apiUrl ='http://localhost:9999/api/users/login'
  const signIn = useSignIn()
  const { classes } = useStyles()
    const form = useForm({
        initialValues: {
         
          email: '', 
          password: ''
        },
      });

     
     const handleLogin=(values)=>{
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...',
        'Access-Control-Allow-Origin' :'*'
      }
  

      axios.post(apiUrl, values,{
        headers: headers
      })
            .then((res)=>{
                if(res.status === 200){
                  console.log(res)
                    if(signIn(
                        {
                            token: res.data.token,
                            expiresIn:300000,
                            tokenType: "Bearer",
                            authState: res.data.authUserState,
                            //refreshToken: res.data.refreshToken,                    // Only if you are using refreshToken feature
                           // refreshTokenExpireIn: res.data.refreshTokenExpireIn     // Only if you are using refreshToken feature
                        }
                    )){ 
                      // Only if you are using refreshToken feature
                        // Redirect or do-something
                        
                    }else {
                        //Throw error
                    }
                }
            })
         return values
     }
      return (
        <>
          
               
      
        <Box maw={320} mx="auto" mt='4'
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
      </>
        )

 }