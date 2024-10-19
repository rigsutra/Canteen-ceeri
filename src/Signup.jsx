import React from 'react';
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

const Signup = () => {
    const toast = useToast();

    const handleSignup = (e) => {
        e.preventDefault();
        // Handle signup logic here
        toast({
            title: "Signup Successful.",
            description: "You have signed up successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
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
                            <Input type="text" placeholder="Enter your name" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Enter your email" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Enter your password" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" placeholder="Confirm your password" />
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
