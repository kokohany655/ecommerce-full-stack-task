import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { CardProducts } from './CardProducts'

const Product = ({products}) => {
  return (
    <SimpleGrid columns={{xl:[4] , lg:[3], md:[2] ,sm:[1], base:[1]}} spacing={'5'} w='85%'>
      {products.length? products.map(product=>(
          <CardProducts key={product.id} product={product} />
      )):<h2>not product found</h2>}
    </SimpleGrid>
  )
}

export default Product