import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
// import TechnologiesEffect from "./components/TechnologiesEffect";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Technologies></Technologies>
      {/* <TechnologiesEffect></TechnologiesEffect> */}
      <Footer></Footer>
    </>
  );
}

export default App;
