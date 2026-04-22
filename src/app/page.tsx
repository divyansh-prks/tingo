import { Container } from "./components/container";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (

    <div className="layout">
<div className="layout-line">
  <div className="left-line"></div>
  <div className="right-line"></div>

</div>
      <Container > 

      <Navbar /> 


      <Hero />

      </Container>

      
    </div>
  );
}
