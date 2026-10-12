import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import { ToastContainer } from "react-toastify";
// import TechnologiesEffect from "./components/TechnologiesEffect";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Technologies></Technologies>
      {/* <TechnologiesEffect></TechnologiesEffect> */}
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
