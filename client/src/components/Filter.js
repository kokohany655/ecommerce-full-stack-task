import { Box,  Select, Text } from '@chakra-ui/react'
import React from 'react'

const Filter = () => {
  return (
    <Box w='25%' ml='50px'>
    <Text fontSize={'30px'} fontWeight='500' mb='20px'>Filter</Text>
    <Box mb='15px'>
    <Text>Size</Text>
    <Select>
        <option value='ALL'>All</option>
        <option value='XS'>XS</option>
        <option value='S'>S</option>
        <option value='L'>L</option>
        <option value='XL'>XL</option>
        <option value='XXL'>XXL</option>
    </Select>
    </Box>
    <Box>
    <Text>Sort</Text>
    <Select>
        <option value='Latest'>Latest</option>
        <option value='Lower'>Lower</option>
        <option value='Highest'>Highest</option>
    </Select>
    </Box>
    </Box>
  )
}

export default Filter