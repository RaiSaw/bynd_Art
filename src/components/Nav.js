import React, {useRef, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import {HamburgerIcon} from '@chakra-ui/icons'
import {Container, Box, Hide, Image, Flex, MenuButton, IconButton, Show, Menu, MenuList, MenuItem} from "@chakra-ui/react";
import '../App.css';


 const Nav = () => {
        const headerRef = useRef(null)

        useEffect(() =>{
          let prevScrollPos = window.scrollY

          const handleScroll = () => {
            const currentScrollPos = window.scrollY
            const headerElement = headerRef.current
            if (!headerElement){
              return
            }
            if (prevScrollPos > currentScrollPos){
              headerElement.style.transform = 'translateY(0)'
            }else{
              headerElement.style.transform = 'translateY(-200px)'
            }
            prevScrollPos = currentScrollPos
          }
          window.addEventListener('scroll', handleScroll)
            return () =>{
                window.removeEventListener('scroll', handleScroll)
            }
        }, [])

     return (
        <Box
        ref={headerRef}
        as="section"
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        bg="#7D0633"
        justifyContent='center'
        zIndex={1}
        boxShadow='dark-lg'
        >
        <Container maxWidth="1280px">
        <nav className="navbar" aria-label="main navigation">
        <Flex
            px={16}
            py={4}
            justifyContent='space-evenly'
            fontSize={18}
            fontWeight={"bold"}
            fontFamily={"Karla"}
            bg="#7D0633"
            justifyItems='center'
        >
          <Box overflow='hidden' borderRadius='full' boxShadow='dark-lg'>
            <Link to="/" className="logo"><Image className='image' src="./bynd.png" alt="Bynd Logo" boxSize="45px"/></Link>
          </Box>
          <Hide below='md'>
          <NavLink className="link" to='/' exact='true'>Home</NavLink>
          <NavLink className="link" to="/vr">VR</NavLink>
          <NavLink className="link" to="/ar">AR</NavLink>
          <NavLink className="link" to="/shop">Shop</NavLink>
          <NavLink className="link" to="/login">Login</NavLink>{/*onClick={onOpen} ref={navRef}*/}
          </Hide>
          <Show below='md' >
            <Menu aria-label='menu' isLazy>
            {({ isOpen }) => (
              <>
                <MenuButton
                  aria-label='Menu button'
                  as={IconButton}
                  color="#7D0633"
                  bg='#F2A07B'
                  icon={<HamburgerIcon />}
                  variant='subtle'
                  _hover={{ bg: '#FBDCC4'}}
                  _expanded={{ bg: '#FBDCC4'}}
                  _focus={{ boxShadow: 'outline' }}
                  isActive={isOpen}
                >
                {isOpen ? 'Close' : 'Open'}
                </MenuButton>
                <MenuList bg='#FBDCC4' color='#7D0633' >
                <MenuItem as='a' href='/'>Home</MenuItem>
                <MenuItem as='a' href='/vr'>VR</MenuItem>
                <MenuItem as='a' href='/ar'>AR</MenuItem>
                <MenuItem as='a' href='/shop'>Shop</MenuItem>
                <MenuItem as='a' href='/login'>Login</MenuItem>
                </MenuList>
                </>
            )}
              </Menu>
              </Show>
        </Flex>
        </nav>
        </Container>
        </Box>
     )
 }
  export default Nav;