import React from 'react'
import { Box, VStack, HStack, Spacer, IconButton, Heading} from '@chakra-ui/react';
import Cardy from '../components/Card'
import { ArrowBackIcon, SearchIcon, ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'


const all = [
  {
    getImageSrc: () => require("../images/img1.jpg"),
    title: "Optimist",
    price:"$220.99",
    alt:"Art image",
    artist:'Artist'
  },
  {
    getImageSrc: () => require("../images/img2.jpg"),
    title: "Mountains",
    price:"$159.99",
    alt:"Art image",
    artist:'Artist'
  },
  {
    getImageSrc: () => require("../images/pic.jpg"),
    title: "Cosmic draw",
    price:"$250.00",
    alt:"Art image",
    artist:'Artist'
  },
  {
    getImageSrc: () => require("../images/pic1.jpeg"),
    title: "Solitude",
    price:"$120.99",
    alt:"Art copy",
    artist:'Artist'
  },
  {
    getImageSrc: () => require("../images/pic2.jpg"),
    title: "Summer",
    price:"$150.99",
    alt:"Art image",
    artist:'Artist'
  },
  {
    getImageSrc: () => require("../images/pic3.jpg"),
    title: "The void",
    price:"$294.99",
    alt:"Art image",
    artist:'Artist'
  },
  {
    getImageSrc: () => require("../images/pic4.jpg"),
    title: "Infinite",
    price:"$120.99",
    alt:"Artwork image",
    artist:'Artist'
  },
  {
    getImageSrc: () => require("../images/pic5.jpg"),
    title: "Ruins",
    price:"$190.95",
    alt:"Art image",
    artist:'Artist'
  },
  {
    getImageSrc: () => require("../images/pic6.jpg"),
    title: "Wilderness",
    price:"$294.95",
    alt:"Artimage",
    artist:'Artist'
  }
  ]

const Shop = () => {
  const style = {
    fontFamily:'Karla',
    fontWeight:'bold',
    alignSelf:"center"
  }
  return (
    <VStack py={16} bg='#FBDCC4' width='full'>
    <Box
    color='#333'
    as='section'
    py={20}
    justifyContent="center"
    alignItems='center'
    maxWidth="1280px"
    height={1500}
    w='100%'
    left={0}
    right={0}
    >
    <VStack spacing={10} alignItems='center' justifyContent="center">
      <HStack gap={[null, 2, 8]}>
      <IconButton
        as='a'
        href='/'
        variant='ghost'
        aria-label='Back icon'
        icon={<ArrowBackIcon boxSize={[4,6,8]}/>}
        mr={[null,2,14]}
      />
      <Heading color='#7D0633' style={{style}} fontSize={['10','14', '22']}>All</Heading>
      <Heading as='a' href='/shop' className='link3' style={{style}} fontSize={['8','14', '20']}>Paintings</Heading>
      <Heading as='a' href='/shop2' className='link3' style={{style}} fontSize={['8','14', '20']}>Sculptures</Heading>
      <Heading as='a' href='/shop3' className='link3' style={{style}} fontSize={['8','14', '20']}>Photography</Heading>
      <Heading as='a' href='/shop4 ' className='link3' style={{style}} fontSize={['8','14', '20']}>Digital Art</Heading>
      <IconButton
        as='a'
        href='/search'
        variant='ghost'
        aria-label='Search icon'
        icon={<SearchIcon boxSize={[4,6,8]}/>}
        mr={[null,2,14]}
        />
      </HStack>
      <Spacer/>
    <Box
      direction="row"
      display="grid"
      gridTemplateColumns="repeat(3,minmax(0,1fr))"
      gridGap={['2', '4', '12']}
      px={['4', '6', '10']}
     >
      {all.map((all) => (
      <Cardy
        imageSrc={all.getImageSrc()}
        key={all.title}
        title={all.title}
        price={all.price}
        artist={all.artist}
      />
      ))}
    </Box>
    <Spacer/>
    <Heading fontSize={['12','16','20']} style={{style}}>Page</Heading>
    <HStack gap={['2', '4', '8']}>
    <ChevronLeftIcon cursor='pointer' boxSize={8}/>
    <Heading className='link2' as='a' href='/shop' style={{style}} fontSize={['12','16', '20']}>1</Heading>
    <Heading className='link2' as='a' href='/shop2' style={{style}} fontSize={['12','16', '20']}>2</Heading>
    <Heading className='link2' as='a' href='/shop3' style={{style}} fontSize={['12','16', '20']}>3</Heading>
    <Heading className='link2' as='a' href='/shop4' style={{style}} fontSize={['12','16', '20']}>4</Heading>
    <Heading className='link2' as='a' href='/shop5' style={{style}} fontSize={['12','16', '20']}>...</Heading>
    <ChevronRightIcon cursor='pointer' boxSize={8}/>
    </HStack>
  </VStack>
</Box>
</VStack>
  )
}

export default Shop