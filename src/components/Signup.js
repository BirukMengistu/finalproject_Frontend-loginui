import {
    
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor,
   
    Stack,
    Box
  } from "@mantine/core";
  import {RegAuth}  from '../hooks/useRegister'
  import { useForm } from '@mantine/form';
  import { useSignIn } from 'react-auth-kit'
  import Cookies from 'js-cookie'
import { LoginAuth }  from '../hooks/useLogin'; 
import {useIsAuthenticated} from 'react-auth-kit';
import { Notifications }  from '@mantine/notifications'
import {CookieOptions} from '../utils/api'

  const Register =() =>{
    const signIn = useSignIn() 
    const options = CookieOptions()
  
    const form = useForm({
      initialValues: {
        firstName:'',
        lastName:'',
        email: '', 
        password: ''
      },
    });
    const createCookies =(signupData)=>{
      console.log("signup signupData" ,signupData)
      if(signupData.statusCode === 201){      
        if(signIn(
            {
                token: signupData.token,
                userId:signupData._id,
                expiresIn:300000,
                tokenType: "Bearer",
                authState: signupData.authUserState,  
            }
         
        ))
        { 
       
         Cookies.set(`userId`, signupData?.user._id.toString(), options)
         Cookies.set(`token`, signupData?.token, options)
         // eslint-disable-next-line no-lone-blocks
        if(signupData.statusCode === 201){
         Notifications.show({
           title: 'User Successful register',
           message: 'Welcome to Professional Hub',
           type: 'success'
         })
  
         setTimeout(()=>{
           return window.location.replace('http://localhost:3536/')
         },2500)
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
    const handleRegister = async (values)=> {
    
              const signupResponse  = await RegAuth('/users/register' , values);
              const signupDignupResponseData = signupResponse.data
              createCookies(signupDignupResponseData)
    }
    return (
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
              >
        
          <Title
          color='dimmed'
            order={2}
            align="center"
            mt="md"
            mb={8}
          >
            Create an Account
          </Title>
          <Stack>
            <TextInput label="firstName" placeholder="Name" required 
            {...form.getInputProps('firstName')} />
            <TextInput label="lastName" placeholder="Name" required 
            {...form.getInputProps('lastName')} />
            <TextInput label="Email" placeholder="you@mantine.dev"
             {...form.getInputProps('email')}
            required />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              defaultValue="secret"
              {...form.getInputProps('password')}
            />
            <PasswordInput 
            label="Confirm password"
             defaultValue="secret" 
             {...form.getInputProps('password')}/>
          </Stack>
         
         
          <Button fullWidth mt="xl" 
             onClick={() => handleRegister(form.values)}>
            Sign Up
          </Button>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Already have an account ?{" "}
            <Anchor
              href="./login"
              size="sm"
              onClick={(event) => event.preventDefault()}
            >
              Login
            </Anchor>
          </Text>
        
      </Box>
    );
  }
  
  export default  Register