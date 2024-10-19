import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    Stack,
    useToast,
    Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = ({ isLogin, setIsLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Mock authentication (replace with actual API call)
        const validEmail = "user@example.com";
        const validPassword = "password123";

        if (email === validEmail && password === validPassword) {
            // Store user data in localStorage (or use JWT/session storage)
            localStorage.setItem("user", JSON.stringify({ email }));
            setIsLogin(true);

            toast({
                title: "Login Successful.",
                description: "You have logged in successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            // Redirect to the homepage
            navigate('/');
        } else {
            toast({
                title: "Invalid Credentials.",
                description: "Please check your email and password.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Flex
            minH="100vh"
            align="center"
            justify="center"
            bgImage="url('your-background-image-url')"  // Replace with actual image URL
            bgSize="cover"
            bgPosition="center"
            bgBlendMode="overlay"
            bgColor="rgba(0,0,0,0.5)"
        >
            <Box
                width={{ base: "90%", md: "400px" }}
                p={6}
                borderRadius="md"
                boxShadow="lg"
                bg="white"
                opacity="0.9"
            >
                <Heading as="h2" size="lg" textAlign="center" mb={6}>
                    {isLogin ? 'Login' : 'Sign Up'}
                </Heading>
                <form onSubmit={handleLogin}>
                    <Stack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input 
                                type="password" 
                                placeholder="Enter your password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Button type="submit" colorScheme="blue" width="full">
                            Login
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Flex>
    );
};

export default Login;
