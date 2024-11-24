import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-400 to-blue-900">
      <Hero />
      <Features />
    </div>
  );
}

export default App;