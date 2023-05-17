import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Box, Flex, VStack, Container, Text, HStack} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"
import '../App.css';


const Footer = () => {
  const socials = [
    {
      icon: faFacebook,
      url: "https://facebook.com",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    }
  ]
  return (
    <Box
      as="section"
      w='100%'
      left={0}
      right={0}
      margin='0 auto'
      height={280}
      bg='#edefee'
      alignContent='center'
      justifyContent='center'
      justifyItems='center'
      alignItems='center'
      justifySelf='center'
      alignSelf='center'
      >
      <Container maxWidth="1280px">
      <footer className="footer">
      <Flex
          as='section'
          px={12}
          py={8}
          color="#333"
          justifyContent="space-between"
          alignItems="flex-start"
          fontSize={['12', '16', '18']}
          fontFamily={"Karla"}
          gap={2}
          >
          <Box overflow='hidden' borderRadius='full' boxShadow='dark-lg'>
          <Link to="/"><Image className='image' src="./bynd.png" alt="Logo" borderRadius='full' boxSize={['40px','80px','120px','180px']}/></Link>
          </Box>
          <VStack spacing={2} alignItems="flex-start">
            <Text fontWeight={"semibold"}>Navigation</Text>
            <Link className='link2' to="/">Home</Link>
            <Link className='link2' to="/Xr">VR Gallery</Link>
            <Link className='link2' to='/Xr'>AR Quest</Link>
            <Link className='link2' to='/shop'>Shop</Link>
            <Link className='link2' to='/login'>Login</Link>
          </VStack>
          <VStack spacing={2} alignItems="flex-start">
            <Text fontWeight={'semibold'}>Connect</Text>
            <Link className='link2'>Contact us</Link>
            <Link className='link2'>About us</Link>
            <Link className='link2'>FAQs</Link>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontWeight={'semibold'}>Socials</Text>
            <HStack gap={[null, 1, 2]}>
              {socials.map((social) =>(
                <a key={social.url} href={social.url} rel='navicons'>
                  <FontAwesomeIcon  className='link2' icon={social.icon} color='black' size="2x"/>
                </a>
              ))}
            </HStack>
          </VStack>
        </Flex>
        </footer>
        </Container>
        </Box>
  )
}

export default Footer;