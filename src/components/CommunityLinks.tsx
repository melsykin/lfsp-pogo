import React from 'react';
import { MessageCircle, Flame } from 'lucide-react';

export default function CommunityLinks() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <a
        href="https://discord.gg/5FKmFNYefH"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        <MessageCircle className="w-6 h-6 mr-2 group-hover:animate-bounce" />
        Join our Discord
      </a>
      <a
        href="https://campfire.onelink.me/eBr8?af_dp=campfire://&af_force_deeplink=true&deep_link_sub1=cj1jbHVicyZjPWViMzlkOTU1LWM4MWYtNDMwZC04NzIyLWVhMjZkMDQ3OTAyZCZpPXRydWU="
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        <Flame className="w-6 h-6 mr-2 group-hover:animate-bounce" />
        Join on Campfire
      </a>
    </div>
  );
}