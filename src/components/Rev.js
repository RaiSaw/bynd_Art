import { Text, VStack, CardBody, Card, HStack, Avatar} from "@chakra-ui/react";
import React from "react";
import {motion} from 'framer-motion'


const Revie = ({ name, review, rating, imageSrc }) => {
    return(
        <Card
        as={motion.div}
        color="#333"
        borderRadius="xl"
        boxShadow='dark-lg'
        left={0}
        right={0}
        w='100%'
        >
        <CardBody>
        <VStack alignItems="flex-start">
          <Text className="stars" transition='all 2s' _hover={{ scale: 2 }}>{rating}</Text>
          <HStack gap={2} justifyContent="space-between" alignItems="center">
            <Avatar className='Avatar' name={name} src={imageSrc} size={['md','lg','xl']}/>
            <Text fontFamily={'Karla'} fontWeight='bold' fontSize={['8','16', '18']}>{name}</Text>
          </HStack>
            <Text fontFamily={'Karla'} fontWeight='regular' fontSize={['8','12', '16']} lineHeight='1.5' color="#333">{review}</Text>
        </VStack>
        </CardBody>
      </Card>
    )
}
export default Revie;
