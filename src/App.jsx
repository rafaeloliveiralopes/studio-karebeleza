import "./App.css";
import HomeSection from "./sections/home/Home";
import About from "./sections/About/About"
import Navbar from "./components/Navbar/Navbar";

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
