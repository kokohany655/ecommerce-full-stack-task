import { Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'

const ModalProduct = ({product , isOpen , onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{product.title}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                <Image  mb='15px' w='100%' h='300px' borderRadius={'5px'} src={product.imageUrl}></Image>
                <Text fontWeight={'700'} textAlign={'center'} fontSize={'23px'}>{product.price} EGP</Text>
                <Text opacity={'.8'} textAlign={'center'} fontWeight={'500'} fontSize={'20px'}>{product.description}</Text>
                </ModalBody>
            </ModalContent>
            
        </Modal>
  )
}

export default ModalProduct