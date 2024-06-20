import "./App.css";
import HomeSection from "./sections/home/Home";
import About from "./sections/About/About";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./sections/OurServices/OurServices";
import Testimony from "./sections/Testimony/Testimony";
import Gallery from "./sections/Gallery/Gallery";
import Contact from "./sections/Contact/Contact";
import WhatsAppWidget from "./components/WhatsAppWidget/WhatsAppWidget";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="testimony">
        <Testimony />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <WhatsAppWidget />
    </>
  );
}

export default App;
