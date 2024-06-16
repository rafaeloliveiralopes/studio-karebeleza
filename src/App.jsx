import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About/About";
import HomeSection from "./sections/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <About />
    </>
  );
}

export default App;
