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
import Testimonials from './components/Testimonials';
import Features from './components/Features'
import Footer from './components/Footer'

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
      <Testimonials />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
