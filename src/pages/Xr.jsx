import React from 'react'
import {Box, VStack} from '@chakra-ui/react';

const Xr = () => {
  return (
    <VStack w='full' overflow='hidden' zIndex={-1} bg='#333'>
      <Box
      as='section'
      height={730}
      bg='url(opt1.png)center/cover no-repeat'
      w={['80%', '100%', '100%']}
      left={0}
      right={0}
      px={['8','10','12']}
      marginTop={19}
      py={20}
      className='image'
      maxWidth={1280}
        >
      </Box>
      </VStack>

  )
}

export default Xr;