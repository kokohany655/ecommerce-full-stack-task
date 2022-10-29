import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Product from "./components/Product";

function App() {
  return (
    <div className="layout">
      <NavBar className='header'/>
      <Container maxW={{xl : 'container.xl' , lg:'container.lg' , md:'container.md' , sm:'container.sm'}} className="main">
        <Product/>
      </Container>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
