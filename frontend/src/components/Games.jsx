'use client';
import React, { useState } from 'react';

// --- Data ---
const allGames = [
  {
    name: 'PlayStation',
    image: '/playstation-bg.png',
    description: 'Explore a universe of games and entertainment with PlayStation Store cards.',
    category: 'Console',
    bgColor: 'bg-blue-800',
    hoverBgColor: 'hover:bg-blue-700',
    tagColor: 'bg-blue-500'
  },
  {
    name: 'Xbox',
    image: '/xbox-bg.png',
    description: 'Get the latest games, DLCs, and more for your Xbox console with Xbox Gift Cards.',
    category: 'Console',
    bgColor: 'bg-green-700',
    hoverBgColor: 'hover:bg-green-600',
    tagColor: 'bg-green-500'
  },
  {
    name: 'FC 24',
    image: '/fc24-bg.jpg',
    description: 'Build your dream squad and compete in the world\'s most popular football game.',
    category: 'Game',
    bgColor: 'bg-gray-800',
    hoverBgColor: 'hover:bg-gray-700',
    tagColor: 'bg-gray-500'
  },
  {
    name: 'Gaming Gift Cards',
    image: '/gaming-bg.jpg',
    description: 'The perfect gift for any gamer. Choose from a wide variety of gaming gift cards.',
    category: 'Gift Card',
    bgColor: 'bg-purple-800',
    hoverBgColor: 'hover:bg-purple-700',
    tagColor: 'bg-purple-500'
  },
  {
    name: 'Entertainment Cards',
    image: '/entertainment-bg.jpg',
    description: 'Get access to your favorite movies, music, and apps with our entertainment gift cards.',
    category: 'Gift Card',
    bgColor: 'bg-red-800',
    hoverBgColor: 'hover:bg-red-700',
    tagColor: 'bg-red-500'
  },
  {
    name: 'Online Services',
    image: '/online-services-bg.jpg',
    description: 'Use our gift cards to pay for a wide range of online services.',
    category: 'Service',
    bgColor: 'bg-indigo-800',
    hoverBgColor: 'hover:bg-indigo-700',
    tagColor: 'bg-indigo-500'
  }
];

const categories = ['All', ...new Set(allGames.map(game => game.category))];

// --- Component ---
export default function Games() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGames = allGames.filter(game => {
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* Hero Section */}
      <header className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/gaming-bg.jpg" 
            alt="Games Background" 
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-blue-900/50 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] leading-tight animate-fade-in-down">
              Explore Our Gaming Universe
            </h1>
            <p className="text-xl md:text-2xl text-yellow-300 font-bold drop-shadow-sm animate-fade-in-up">
              Your one-stop shop for game credits, gift cards, and more.
            </p>
            <div className="pt-4">
              <input
                type="search"
                placeholder="Search for a game or gift card..."
                className="w-full max-w-lg px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-slate-300 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Games Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">All Game Products</h2>
            <p className="text-slate-500 mt-2 text-lg">Filter by category or search to find what you're looking for.</p>
          </div>
          
          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm
                  ${selectedCategory === category 
                    ? 'bg-blue-800 text-white scale-105 shadow-lg' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:-translate-y-0.5'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGames.map((game, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className={`absolute top-4 right-4 text-xs font-bold text-white px-3 py-1 rounded-full ${game.tagColor}`}>
                      {game.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{game.name}</h3>
                    <p className="text-slate-500 mb-5 flex-grow text-sm leading-relaxed">{game.description}</p>
                    <div className="border-t-2 border-slate-100 pt-5 mt-auto">
                      <button className={`${game.bgColor} ${game.hoverBgColor} text-white px-6 py-3 rounded-lg font-bold w-full transition-transform duration-300 group-hover:scale-105`}>
                        View Products
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-slate-800">No products found</h3>
              <p className="mt-1 text-sm text-slate-500">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

