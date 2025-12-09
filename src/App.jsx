import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Biography from './components/Biography';
import Poems from './components/Poems';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <Biography />
        <Poems />
        <Works />
        <Contact />
      </main>
    </div>
  );
}

export default App;
