import './App.css';
import Navbar from './Components/Navbar/NavBar';
import Hero from './Components/Hero/Hero';
import Video from './Components/Video/Video';
import Performance from './Components/Performance/Performance';
import Features from './Components/Features/Features';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='VidAndPerSection'>
      <Video></Video>
      <Performance></Performance>
      <Features></Features>
      </div>
    </div>
  );
}

export default App;
