import React from 'react';
import { Box, Stack, Text, Link, Flex, Spacer } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";
import ceeriLogo from "./ceeri-logo.png";
import normalLunch from "./normal-food.jpeg";
import specialLunch from "./special-lunch.jpg";

const Home = () => {
    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        });

        const options = {
            key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "CSIR_CEERI",
            description: "Test Transaction",
            image: "https://github.com/TanuBhati199/mine-avatar/blob/main/anime%20image.jpeg?raw=true",
            order_id: order.id, // This is a sample Order ID. Pass the id obtained in the response of Step 1
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Tanu Bhati",
                email: "tanu_bhati199@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#0f0e0e" // "#3399cc"
            }
        };

        const razor = new window.Razorpay(options);
        razor.open();
    };

    return (
        <Box>
            {/* Header */}
            <Box bg="lightSkyBlue" p={4}>
                <Flex align="center">
                    <img src={ceeriLogo} alt="CSIR CEERI Logo" style={{ width: "80px", height: "auto" }} />
                    <Spacer />
                    <Box>
                        <Link href="/about" color="white" mr={4}>About</Link>
                        <Link href="/contact" color="white" mr={4}>Contact</Link>
                        <Link href="/login" color="white" mr={4}>Login</Link>
                        <Link href="/signup" color="white">Signup</Link>
                    </Box>
                </Flex>
            </Box>

            {/* Main Content */}
            <Stack h={"100vh"} alignItems={"center"} justifyContent="center" direction={["column", "row"]} spacing={6}>
                <Box textAlign="center">
                    <Card foodtype={"Normal Lunch"} amount={45} img={"https://cdn.shopify.com/static/sample-images/garnished.jpeg?"} checkoutHandler={checkoutHandler} />
                    
                </Box>
                <Box textAlign="center">
                    <Card foodtype={"Special Lunch"} amount={45} img={specialLunch} checkoutHandler={checkoutHandler} />
                    
                </Box>
                <Box textAlign="center">
                    <Card foodtype={"Normal Dinner"} amount={45} img={normalLunch} checkoutHandler={checkoutHandler} />
                     
                </Box>
            </Stack>

            {/* Footer */}
            <Box bg="lightSkyBlue" p={4} mt={4}>
                <Flex direction="column" align="center">
                    <Text color="white" mb={2}>© 2024 CSIR-CEERI Pilani</Text>
                    <Stack direction="row" spacing={4}>
                        <Link href="https://www.ceeri.res.in/" color="white">Home</Link>
                        <Link href="https://example.com" color="white">Link 2</Link>
                        <Link href="https://example.com" color="white">Link 3</Link>
                        <Link href="https://example.com" color="white">Link 4</Link>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    );
};

export default Home;