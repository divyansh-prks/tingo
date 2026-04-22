import { Container } from "./components/container";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (

    <div className="layout">

      <Container > 

      <Navbar /> 


      <Hero />

      </Container>

      
    </div>
  );
}
