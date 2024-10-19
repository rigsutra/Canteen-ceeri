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

const Signup = ({ setIsLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        // Store user data or make API call for signup
        localStorage.setItem("user", JSON.stringify({ name, email }));
        setIsLogin(true);

        toast({
            title: "Signup Successful.",
            description: "You have signed up successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        // Redirect to the homepage after signup
        navigate('/');
    };

    return (
        <Flex
            minH="100vh"
            align="center"
            justify="center"
            bgGradient="linear(to-r, lightgreen.200, green.500)"
        >
            <Box
                width={{ base: "90%", md: "400px" }}
                p={6}
                borderRadius="md"
                boxShadow="lg"
                bg="white"
            >
                <Heading as="h2" size="lg" textAlign="center" mb={6}>
                    Sign Up
                </Heading>
                <form onSubmit={handleSignup}>
                    <Stack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input 
                                type="text" 
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
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
                        <Button type="submit" colorScheme="green" width="full">
                            Sign Up
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Flex>
    );
};

export default Signup;
