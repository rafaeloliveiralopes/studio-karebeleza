import "./App.css";
import HomeSection from "./sections/home/Home";
import About from "./sections/About/About";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./sections/OurServices/OurServices";
import Testimony from "./sections/Testimony/Testimony";
import Gallery from "./sections/Gallery/Gallery";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <About />
      <OurServices />
      <Testimony />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
