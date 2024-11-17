import React from 'react';
// import './styles/index.scss';
import HeaderHero from './components/HeaderHero';
import Services from './components/Services';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <HeaderHero />
      <Services />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
