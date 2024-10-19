import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    Stack,
    Image,
    Container,
} from '@chakra-ui/react';
import ceeriLogo from './ceeri-logo.png'; // Assuming you have a CEERI logo image in your project

const About = () => {
    return (
        <Container maxW="container.lg" py={10}>
            <VStack spacing={8} textAlign="center">
                <Image src={ceeriLogo} alt="CSIR-CEERI Logo" boxSize="150px" />
                <Heading as="h1" size="2xl">
                    About CSIR-CEERI Pilani
                </Heading>
                <Text fontSize="lg" color="gray.600">
                    CSIR-CEERI (Central Electronics Engineering Research Institute), Pilani, is a pioneering institution in the field of electronics and information technology in India. Founded in 1953, it is one of the constituent laboratories of the Council of Scientific and Industrial Research (CSIR), focusing on cutting-edge research in advanced areas of electronics such as microelectronics, device technologies, and cyber-physical systems.
                </Text>
                <Text fontSize="lg" color="gray.600">
                    The institute has a strong commitment to innovation and excellence in both academic research and industrial applications. Over the years, CEERI has contributed significantly to India's growth in electronics and related fields, playing a vital role in supporting various industries and academic institutions.
                </Text>
            </VStack>

            {/* Canteen Section */}
            <Box mt={12}>
                <Heading as="h2" size="xl" textAlign="center" mb={6}>
                    About the CSIR-CEERI Canteen
                </Heading>
                <Stack direction={{ base: "column", md: "row" }} spacing={10}>
                    <Box flex={1}>
                        <Image 
                            src="https://images.unsplash.com/photo-1576864381107-7b96d4a9a0dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                            alt="Canteen Image"
                            borderRadius="md"
                            boxSize="full"
                            objectFit="cover"
                        />
                    </Box>
                    <Box flex={1}>
                        <Text fontSize="lg" color="gray.600">
                            The CSIR-CEERI canteen is a vibrant space serving nutritious and delicious meals to students, faculty, and visitors. With a wide variety of vegetarian and non-vegetarian options, the canteen offers both regular and special meals at affordable prices. It is known for its friendly service, hygienic environment, and a commitment to providing high-quality food.
                        </Text>
                        <Text fontSize="lg" color="gray.600" mt={4}>
                            The canteen menu includes:
                        </Text>
                        <VStack align="start" mt={2}>
                            <Text>• Breakfast: Idli, Dosa, Paratha, Poha, and more</Text>
                            <Text>• Lunch: Regular and special meals with rice, chapati, curries, and more</Text>
                            <Text>• Snacks: Samosa, Sandwiches, Tea, Coffee, and Juices</Text>
                            <Text>• Dinner: North and South Indian delicacies, with seasonal specials</Text>
                        </VStack>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
};

export default About;
