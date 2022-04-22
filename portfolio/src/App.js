import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        {/* navbar */}
        <Header />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
