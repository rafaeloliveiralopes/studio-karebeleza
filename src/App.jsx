import "./App.css";
import HomeSection from "./sections/home/Home";
import About from "./sections/About/About";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./sections/OurServices/OurServices";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <About />
      <OurServices />
    </>
  );
}

export default App;
