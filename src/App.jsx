import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import PreLoader from './components/PreLoader';
import Service from './components/Service';
import TopBar from './components/TopBar';
import SpecialDish from './components/SpecialDish';

function App() {
  return (
    <div className="App">
      {/* <PreLoader /> */}
      <TopBar />
      <Navbar />
      <Hero />
      <Service />
      <About />
      <SpecialDish />
    </div>
  );
}

export default App;
