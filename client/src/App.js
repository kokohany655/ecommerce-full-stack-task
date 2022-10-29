import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="layout">
      <NavBar className='header'/>
      <Container className="main">

      </Container>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
