import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor,
    Group,
    Stack,
    Box
  } from "@mantine/core";
  

  const Register =() =>{
    
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
            <TextInput label="Name" placeholder="Name" required />
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              defaultValue="secret"
              required
            />
            <PasswordInput label="Confirm password" defaultValue="secret" />
          </Stack>
          <Group position="apart" mt="xs">
            <Anchor
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign Up
          </Button>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Already have an account ?{" "}
            <Anchor
              href="#"
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