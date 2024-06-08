import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import PreLoader from './components/PreLoader';
import Service from './components/Service';
import TopBar from './components/TopBar';
import SpecialDish from './components/SpecialDish';
import Reservation from './components/Reservation';
import Menu from './components/Menu'

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
      <SpecialDish />
      <Reservation />
      <Menu />
    </div>
  );
}

export default App;
