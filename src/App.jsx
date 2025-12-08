import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Biography from './components/Biography';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <Biography />
        <Works />
        <Contact />
      </main>
    </div>
  );
}

export default App;
