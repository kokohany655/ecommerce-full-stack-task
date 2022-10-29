import {  Flex, Image, Text,Button, VStack } from '@chakra-ui/react'
import React from 'react'

export const CardProducts = ({product}) => {
  return (
    <VStack p='2' h='300px' borderRadius={'10px'} boxShadow={'0px 0px 7px rgba(0,0,0,0.5)'}>
        <Image borderRadius={'10px'} w='100%' h={'170px'} src={product.imageUrl}></Image>
        <Flex w='100%' justifyContent={'space-between'} fontSize='18px' mb='5px' fontWeight={'600'}>
        <Text>{product.title}</Text>
        <Text>{product.price} EGP</Text>
        </Flex>
        <Text opacity={'.7'} w='100%'>{product.description}</Text>
        <Button colorScheme={'facebook'} alignSelf={'flex-end'} w='100%'>Add To Cart</Button>
    </VStack>
  )
}
