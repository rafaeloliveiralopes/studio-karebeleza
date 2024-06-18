import "./App.css";
import HomeSection from "./sections/home/Home";
import About from "./sections/About/About";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./sections/OurServices/OurServices";
import Testimony from "./sections/Testemony/Testemony";
import Gallery from "./sections/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <About />
      <OurServices />
      <Testimony />
      <Gallery />
    </>
  );
}

export default App;
