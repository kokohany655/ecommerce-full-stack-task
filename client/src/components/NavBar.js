import { Box, Container, Text, Button } from '@chakra-ui/react'
import React from 'react'

const NavBar = () => {
  return (
    <Box backgroundColor={'steelblue'} p={2}>
        <Container maxW={{xl : 'container.xl' , lg:'container.lg' , md:'container.md' , sm:'container.sm'}} display={'flex'} fontSize={'xl'} fontWeight={'600'} alignItems='center'>
            <Text mr={'15'}>Shoping cart</Text>
            <Button mx='3'>Home</Button>
            <Button>Order</Button>
        </Container>
    </Box>
  )
}

export default NavBar