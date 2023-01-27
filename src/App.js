import "./App.css";
import Navbar from "./Components/Navbar/NavBar";
import Hero from "./Components/Hero/Hero";
import Video from "./Components/Video/Video";
import Performance from "./Components/Performance/Performance";
import Features from "./Components/Features/Features";
import Help from "./Components/Help/Help";
import About from "./Components/About/About";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="VidAndPerSection">
        <Video></Video>
        <Performance></Performance>
        <Features></Features>
      </div>
      <div className="AboutSection">
        <Help></Help>
        <About></About>
      </div>
    </div>
  );
}

export default App;
