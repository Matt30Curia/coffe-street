import './style/App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className='popular-now'>
        <Card/>
        <Card/>
        <Card/>
      </div>
        
    </>
  );
}

export default App;
