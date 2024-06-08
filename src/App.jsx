import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import PreLoader from './components/PreLoader';
import Service from './components/Service';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      {/* <PreLoader /> */}
      <TopBar />
      <Navbar />
      <Hero />
      <Service />
    </div>
  );
}

export default App;
