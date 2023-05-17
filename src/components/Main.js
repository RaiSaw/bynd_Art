import React from 'react'
import { Flex, Box, HStack, Grid, VStack, Container, Heading, Button, Spacer, Text, Image} from '@chakra-ui/react';
import Cardy from './Card'
import Rev from './Rev'

const featured = [
{
  getImageSrc: () => require("../images/img1.jpg"),
  title: "Aura",
  alt:"Aura art",
  artist:'Artist'
},
{
  getImageSrc: () => require("../images/pic8.jpg"),
  title: "Bloom",
  alt:"Bloom art",
  artist:'Artist'
},
{
  getImageSrc: () => require("../images/pic2.jpg"),
  title: "Herbst",
  alt:"Galaxy art",
  artist:'Artist'
},
{
  getImageSrc: () => require("../images/pic5.jpg"),
  title: "Winter",
  alt:"Winter art",
  artist:'Artist'
},
{
  getImageSrc: () => require("../images/pic6.jpg"),
  title: "Wilderness",
  alt:"Wilderness art",
  artist:'Artist'
}
]
const reviews = [
  {
      rating:'⭐️⭐️⭐️⭐️⭐️',
      name: "Jane D.",
      getImageSrc: () => require("../images/Avat.png"),
      raview:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
      rating:'⭐️⭐️⭐️⭐️',
      name: "Drew T.",
      getImageSrc: () => require("../images/Avat4.png"),
      raview:"At vero eos et accusam et justo duo dolores et ea rebum..",
  },
  {
      rating:'⭐️⭐️⭐️',
      name: "Elli B.",
      getImageSrc: () => require("../images/Avat5.png"),
      raview:"Sed diam voluptua!",
  },
  {
      rating:'⭐️⭐️⭐️⭐️',
      name: "Finn T.",
      getImageSrc: () => require("../images/Avat3.png"),
      raview:"Stet clita kasd gubergren, no sea takimata sanctus est.",
  }
  ]

export default function Home(){
  return (
    <>
      <Box bg='#333'>
      <Container maxWidth="1280px" overflow='hidden' zIndex={-1}>
      <Box
          height={750}
          bg='url(img4.jpg)top/cover no-repeat'
          w='100%'
          left={0}
          right={0}
          px={['8','10','12']}
          marginTop={1}
          py={20}
          className='image'
          >
          <header className="landing">
          <Flex py={30} justifyContent="center" justifyItems='center'>
            <VStack py={12} justifyItems='center' alignItems="flex-start">
              <Heading as='h1' textShadow='0 0 2px #FBDCC4' fontFamily={'Markazi Text'} fontSize={['40','50', '64']} fontWeight='medium' color='#7D0633'>Revolutionize the Art Gallery Experience</Heading>
              <Heading as='h2' textShadow='0 0 2px #FBDCC4' fontFamily={'Markazi Text'} fontSize={['28','35', '35']} fontWeight='regular' color='#7D0633'>Step inside the world of art and find the art that truly speaks to you</Heading>
              <VStack alignItems='flex-start' py={12} justifyContent='center'>
                <Text alignSelf='center' justifySelf="center" py={6} fontSize={['12','16', '18']} textShadow='0 0 2px #FBDCC4' fontFamily={'Karla'} fontWeight='bold' color='#7D0633' lineHeight='1.5'>Explore our art gallery and join us<br/>to an immersive art experience.<br/></Text>
                <Button as='a' href='/vr' boxShadow='dark-lg' size={['sm','md','lg']} fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} bg='#7D0633' color='#FBDCC4' rounded='15px'_hover={{bg:'#F2A07B', textColor:'#7D0633'}}>Visit our VR Gallery</Button>
              </VStack>
            </VStack>
          </Flex>
          </header>
      </Box>
      </Container>
      </Box>
      <Box bg="#FBDCC4">
      <Container maxWidth="1280px" >
      <Flex
          as='section'
          color='#333'
          alignItems='center'
          maxWidth="1280px"
          height={750}
          w='100%'
          left={0}
          right={0}
          p={['2', '6', '12']}
          justifyContent="space-between"
          >
        <VStack spacing={12}>
          <Flex gap={10} px={[2, 6, 12]} alignSelf="flex-start" justifyContent="space-between">
            <Heading as='h2' fontFamily={'Karla'} fontWeight='extrabold' fontSize={['12','18','24']}>Featured Artworks</Heading>
          <Spacer/>
            <Button as='a'  href='/shop' boxShadow='dark-lg' fontFamily={'Markazi Text'} alignSelf="flex-end" fontWeight='bold' fontSize={18} size={['sm','md','lg']} bg='#7D0633' color='#FBDCC4' rounded='15px'_hover={{bg:'#F2A07B', textColor:'#7D0633'}}>See all Artworks</Button>
          </Flex>
          <Spacer/>
          <Box
          direction="row"
          display="grid"
          gridTemplateColumns="repeat(5,minmax(0,1fr))"
          gridGap={[2, 4, 8]}
         >
            {featured.map((featured) => (
            <Cardy
              imageSrc={featured.getImageSrc()}
              key={featured.title}
              title={featured.title}
              alt={featured.alt}
              artist={featured.artist}
            />
            ))}
             </Box>
        </VStack>
    </Flex>
    </Container>
    </Box>
    <Box
        className='AR'
        as='section'
        color='#FBDCC4'
        height={750}
        left={0}
        right={0}
        p={[10, 16, 20]}
        justifyContent="center"
        alignContent='center'
        bg='#7D0633'
        >
          <Container py={20} maxWidth="1280px">
          <Flex py={20} justifyContent="space-evenly" alignContent='center'>
            <VStack spacing={12} alignItems="flex-start" justifyContent="center">
              <Heading as='h1' textShadow='0 0 2px #F2A07B' fontFamily={'Markazi Text'} fontSize={['36','50', '60']}fontWeight='medium' color='#FBDCC4'>Join our AR Quest</Heading>
              <Text fontFamily={'Karla'} fontWeight='medium' fontSize={['12','16', '18']} lineHeight='1.5'>Explore, learn and play interactive games<br/>with digital artworks created by<br/>passionate artists.</Text>
              <Button as='a' href='/login' boxShadow='dark-lg' fontFamily={'Markazi Text'} justifySelf="space-between" fontWeight='bold' fontSize={18} size={['sm','md','lg']} bg='#F2A07B' color='#7D0633' rounded='15px'_hover={{bg:'#7D0633', textColor:'#FBDCC4', border:'1px solid #F2A07B'}} >Sign in</Button>
            </VStack>
            <Box justify='center' overflow='hidden' borderRadius='10px'>
              <Image className='image' objectFit='cover' src="ar.jpg" alt="Art gallery image" boxSize={['90px','150px', '300px']} borderRadius='10px'/>
            </Box>
          </Flex>
          </Container>
      </Box>
    <Box bg="#FBDCC4">
    <Container maxWidth="1280px">
    <Flex
        as="section"
        left={0}
        right={0}
        maxWidth="1280px"
        height={600}
        w='100%'
        p={['null', '6', '12']}
        color='#333'
        justifyContent='space-between'
        alignItems='center'
        >
        <VStack spacing={12}>
          <HStack gap={10} px={[2, 6, 12]} alignSelf="flex-start" justifyContent="space-between">
            <Heading as='h2' justify="center" alignItems="center" fontFamily={'Karla'} fontWeight='extrabold' fontSize={['16px', '18px', '24px']}>Testimonials</Heading>
            <Spacer/>
            <Button as='a' href='/reviews' boxShadow='dark-lg' fontFamily={'Markazi Text'} justifySelf="center" fontWeight='bold' fontSize={18} size={['sm','md','lg']} bg='#7D0633' color='#FBDCC4' rounded='15px'_hover={{bg:'#F2A07B', textColor:'#7D0633'}}>See all reviews</Button>
          </HStack>
            <Spacer/>
            <Box
            direction="row"
            display='grid'
            gridTemplateColumns="repeat(4,minmax(0,1fr))"
            gridGap={['1', '4', '10']}
            borderRadius="xl"
            >
            {reviews.map(review => (
            <Rev
              key={review.name}
              rating={review.rating}
              name={review.name}
              imageSrc={review.getImageSrc()}
              review={review.raview}
            />
            ))}
            </Box>
        </VStack>
    </Flex>
    </Container>
    </Box>
  </>
  )
}