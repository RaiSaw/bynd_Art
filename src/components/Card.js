import { Heading, Image, CardBody, Card, HStack} from "@chakra-ui/react";
import React from "react";
import {motion} from 'framer-motion';

const Cardy = ({ title, imageSrc, alt, price, artist }) => {
    return(
        <Card
        as={motion.span}
        color="#333"
        backgroundColor="#edefee"
        boxShadow='dark-lg'
        w='100%'
        overflow='hidden'
        whileHover={{
          scale: 1.2,
          transition: { duration: 2, ease:'backInOut' },
        }}
        whileTap={{ scale: 1.2 }}
        >
          <Image className='image' src={imageSrc} w={250} height={250} objectFit='cover' alt={alt}/>
          <CardBody>
              <HStack justify='space-between'>
              <Heading as='h4' alignItems="flex-start" fontFamily={'Karla'} fontWeight='bold' fontSize={['8','14','18']}>{title}</Heading>
              <Heading as='h4' fontFamily={'Karla'} fontWeight='medium' fontSize={['8','12','16']}>{price}</Heading>
              </HStack>
              <Heading as='h4' fontFamily={'Karla'} fontWeight='medium' fontSize={['3','12','16']}>{artist}</Heading>
            </CardBody>
        </Card>
    )
}
export default Cardy;