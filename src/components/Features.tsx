import React from 'react';
import { Users, MapPin, Flame } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Active Community",
      description: "Connect with local trainers, make friends, and participate in community events.",
      color: "text-blue-600"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Local Raids",
      description: "Coordinate raids with nearby players and take down powerful Pokemon together.",
      color: "text-red-500"
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Real-time Updates",
      description: "Stay informed about rare spawns, events, and community activities.",
      color: "text-orange-500"
    }
  ];

  return (
    <div className="relative z-10 mt-24 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-2"
        >
          <div className={`${feature.color} mb-4 transform transition-transform duration-300 group-hover:scale-110`}>
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}