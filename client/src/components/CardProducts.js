import {  Flex, Image, Text,Button, VStack,  useDisclosure,  Box } from '@chakra-ui/react'
import React from 'react'
import ModalProduct from './ModalProduct'

export const CardProducts = ({product}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <VStack p='2' justifyContent={'space-between'}  borderRadius={'10px'} boxShadow={'0px 0px 7px rgba(0,0,0,0.5)'}>
      <Box>
        <Image mb='7px' onClick={onOpen} borderRadius={'10px'} w='100%' h={'170px'} src={product.imageUrl}></Image>
        <Flex w='100%' justifyContent={'space-between'} fontSize='18px' mb='5px' fontWeight={'600'}>
        <Text>{product.title}</Text>
        <Text>{product.price} EGP</Text>
        </Flex>
        <Text opacity={'.7'} w='100%'>{product.description}</Text>
        </Box>
        <Button colorScheme={'facebook'} alignSelf={'flex-end'} w='100%'>Add To Cart</Button>
        <ModalProduct product={product} isOpen={isOpen} onClose={onClose}/>
    </VStack>
  )
}
