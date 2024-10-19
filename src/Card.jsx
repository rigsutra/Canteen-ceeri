import { Button,Image,Text,VStack } from '@chakra-ui/react';
import React from 'react';

const Card = ({ foodtype,amount, img, checkoutHandler }) => {
    return (
        <VStack>
            <Image src={img} boxSize={"64"} objectFit="cover"/>
            <Text fontSize="lg" fontWeight="bold" mt={2}>{foodtype}</Text>
            <Text>Rs.{amount}</Text>
            <Button onClick={()=> checkoutHandler(amount)} >Book Now</Button>
        </VStack>
    )
}
export default Card;