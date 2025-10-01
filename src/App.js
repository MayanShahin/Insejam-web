import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      {/* هذا الـ div يضمن وجود padding أعلى للمحتوى بسبب الـ fixed navbar */}
      <div className="main-content">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
        <section id="contact"><Footer /></section>
      </div>
    </>
  );
}

export default App;
