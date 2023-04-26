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
  const Register =() =>{
    const signIn = useSignIn() 
    
    const form = useForm({
      initialValues: {
        firstName:'',
        lastName:'',
        email: '', 
        password: ''
      },
    });

    const handleRegister = (values)=> {
    
              const response  = RegAuth('/users/register' , values);
              response.then((res)=>{
                if(res.status === 201){
                  
                    if(signIn(
                        {
                            token: res.data.token,
                            expiresIn:300000,
                            tokenType: "Bearer",
                            authState: res.data.authUserState,
                            
                        }
                    )){ 
                      // Only if you are using refreshToken feature
                        // Redirect or do-something
                        
                    }else {
                        //Throw error
                    }
                }
                  })

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