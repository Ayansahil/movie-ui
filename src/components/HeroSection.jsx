import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-127 mx-8 my-2 rounded-xl border border-white/20 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://wallpapercave.com/wp/wp1890607.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Top Section */}
        <div>
          {/* Now Trending Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-1 mb-2">
            <i className="ri-fire-fill text-orange-500"></i>
            <span className="text-white text-sm font-medium">Now Trending</span>
          </div>

          {/* Genre Tags */}
          <div className="flex gap-2 mb-6">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
              Drama
            </span>
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
              Violent
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-normal text-white mb-2 mt-18 max-w-xl">
            Peaky Blinders : The Immortal Man
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base max-w-lg leading-relaxed mb-12">
            A notorious gang in 1919 Birmingham, England, is led by the fierce
            Tommy Shelby, a crime boss set on moving up in the world no matter
            the cost.
          </p>
        </div>

        {/* Bottom Section - Buttons */}
        <div className="flex items-center gap-3">
          {/* Watch Now Button */}
          <button className="flex items-center gap-2 bg-[#9e72e0] hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer">
            <i className="ri-play-fill text-lg"></i>
            Watch Now
          </button>

          {/* Download Button */}
          <button className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition border border-white/20 cursor-pointer">
            <i className="ri-download-line text-white text-lg"></i>
          </button>

          {/* More Options Button */}
          <button className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition border border-white/20 cursor-pointer">
            <i className="ri-more-fill text-white text-lg"></i>
          </button>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
