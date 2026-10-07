import React from 'react';
import { LangProvider } from './i18n/LangContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Pricing from './sections/Pricing';
import Students from './sections/Students';
import Contact from './sections/Contact';
import { waLink } from './config';
import './App.css';

export default function App() {
  return (
    <LangProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Pricing />
          <Students />
          <Contact />
        </main>
        <Footer />
        {/* WhatsApp Floating Button */}
        <a
          href={waLink()}
          className="whatsapp-fab"
          target="_blank"
          rel="noopener noreferrer"
          title="Contactez-moi sur WhatsApp"
        >
          💬
        </a>
      </div>
    </LangProvider>
  );
}
