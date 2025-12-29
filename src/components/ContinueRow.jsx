import React from "react";

const ContinueRow = () => {
  const continueWatching = [
    {
      id: 1,
      title: "Shutter Island",
      season: "Movie",
      episode: "Part-1",
      duration: "2h 18min",
      progress: 55,
      thumbnail: "https://images.alphacoders.com/693/thumb-1920-693991.jpg",
    },
    {
      id: 2,
      title: "Avatar Fire and Ash",
      season: "Movie",
      episode: "Part-1",
      duration: "2h 42min",
      progress: 40,
      thumbnail: "https://images3.alphacoders.com/140/thumb-1920-1404479.jpg",
    },
    {
      id: 3,
      title: "Stranger Things",
      season: "S4",
      episode: "Ep-5",
      duration: "1h 17min",
      progress: 70,
      thumbnail: "https://images.alphacoders.com/139/thumb-1920-1393397.jpg",
    },
    {
      id: 4,
      title: "Avengers: Infinity War",
      season: "Movie",
      episode: "Final",
      duration: "3h 02min",
      progress: 25,
      thumbnail:
        "https://media.gq-magazine.co.uk/photos/5d138e9fb6fee94e70c9e01a/16:9/w_2560%2Cc_limit/https_2f2fblogs-imagesforbes.jpg",
    },
    {
      id: 5,
      title: "Loki",
      season: "S2",
      episode: "Ep-2",
      duration: "52min",
      progress: 65,
      thumbnail: "https://images7.alphacoders.com/132/thumb-1920-1326003.jpeg",
    },
  ];

  return (
    <div className="w-full px-8 py-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-medium">Continue Watching</h2>
        <button className="px-2 py-1 bg-white/5 hover:bg-white/10 text-gray-300 text-sm rounded transition border border-white/10">
          See All
        </button>
      </div>

      {/* Movie Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {continueWatching.map((item) => (
          <div
            key={item.id}
            className="relative shrink-0 w-78 h-42 rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* Thumbnail */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-medium text-base mb-1 truncate">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-gray-300 text-xs mb-2">
                <span>
                  {item.season}, {item.episode}
                </span>
                <span>{item.duration}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/20 rounded--xl overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-14 h-14 bg-purple-400/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <i className="ri-play-fill text-white text-2xl"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueRow;
