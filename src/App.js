
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Delivery from './components/Delivery';
import AboutUs from './components/AboutUs'
import SpecialMenu from './components/SpecialMenu';
import Bonus from './components/Bonus';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Popular />
      <Delivery/>
      <AboutUs/>
      <SpecialMenu />
      <Bonus/>
    </>
  );
}

export default App;
