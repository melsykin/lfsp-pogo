import React from 'react';
import { MapPin } from 'lucide-react';
import CommunityLinks from './CommunityLinks';

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1672878316461-e9587d473658?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-transparent to-blue-900/30" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-center space-x-2">
          <div className="bg-white/90 p-3 rounded-full shadow-lg">
            <MapPin className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow-lg">
            Lake Forest Sports Park
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6 text-shadow-lg">
          Pokemon GO Community
        </h2>
        <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-2xl mx-auto text-shadow">
          Join our thriving Pokemon GO community! We organize raids, share rare spawns, and create lasting friendships through our love of Pokemon.
        </p>

        <CommunityLinks />
      </div>
    </div>
  );
}