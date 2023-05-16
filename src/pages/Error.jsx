import React from 'react'
import {Heading, Box, VStack} from '@chakra-ui/react';

const Error = () => {
  return (
    <>
      <VStack py={16} width='full' bg="#FBDCC4">
        <Box
            className='error'
            as='section'
            maxWidth="1280px"
            height={780}
            w={['80%', '100%', '100%']}
            left={0}
            right={0}
            px={8}
            py={12}
            justifyContent="center"
            alignContent='center'
            alignItems='center'
            justifyItems='center'
            textAlign='center'
            >
        <Heading as="h1"
            fontFamily={'Markazi Text'}
            fontSize={['40','50', '64']}
            fontWeight='medium'
            color='#7D0633'
            p={20}
            >
            Page is not found - 404
        </Heading>
        </Box>
      </VStack>
    </>
  )
}

export default Error;