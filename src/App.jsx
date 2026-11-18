import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import Solution from "./components/Solution/Solution";
import Impact from "./components/Impact/Impact";
import UseCases from "./components/UseCases/UseCases";
import Business from "./components/Business/Business";
import Founders from "./components/Founders/Founders";
import Footer from "./components/Footer/Footer";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Impact />
      <UseCases />
      <Business />
      <Founders />
      <Footer />
    </>
  );
}

export default App;