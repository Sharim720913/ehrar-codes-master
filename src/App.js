import logo from "./logo.svg";

import "./App.css";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="con">
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
