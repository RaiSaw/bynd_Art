import React from 'react'
import {Box, VStack} from '@chakra-ui/react';

const Ar = () => {
  return (
    <VStack w='full' overflow='hidden' zIndex={-1} bg='#333'>
      <Box
      as='section'
      height={730}
      bg='url(endlessD.png)top/cover no-repeat'
      w={['80%', '100%', '100%']}
      left={0}
      right={0}
      px={['8','10','12']}
      marginTop={19}
      py={20}
      className='image'
      maxWidth={1280}
      alt='endless doors gif'
        >
      </Box>
      </VStack>

  )
}

export default Ar;