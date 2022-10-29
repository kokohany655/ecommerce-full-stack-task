import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import data from './data.json'

function App() {
  const [products, setProducts] = useState(data)
  return (
    <div className="layout">
      <NavBar className='header'/>
      <Container my='40px' maxW={{xl : 'container.xl' , lg:'container.lg' , md:'container.md' , sm:'container.sm'}} className="main">
        <Flex justifyContent={'space-between'}>
        <Product products={products}/>
        <Filter />
        </Flex>
      </Container>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
