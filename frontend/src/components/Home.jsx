import React from 'react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative min-h-[700px] md:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Mobile Background */}
          <img 
            src="/Hero_section_mobile.webp" 
            alt="Hero Background Mobile"
            className="block md:hidden w-full h-full object-cover object-right"
            fetchPriority="high"
            width="800" height="700"
          />
          {/* Desktop Background */}
          <img 
            src="/Hero_section.webp" 
            alt="Hero Background Desktop"
            className="hidden md:block w-full h-full object-cover object-center"
            fetchPriority="high"
            width="1920" height="600"
          />
          {/* Subtle overlay to ensure text readability on smaller screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 via-transparent to-transparent md:hidden"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-left space-y-6 flex flex-col">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] leading-tight order-2 md:order-none">              Recharge your games, gift cards <span className="text-white"> and mobile top-ups instantly</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:drop-shadow-sm order-3 md:order-none">
              Fast, secure and easy digital recharges online
            </p>

            {/* Search Bar */}
            <div className="relative w-full max-w-lg pt-2 pb-1 order-1 md:order-none">
              <input 
                type="text" 
                placeholder="Search for games, gift cards..." 
                className="w-full py-4 pl-6 pr-16 rounded-md border-2 border-white/50 bg-white/95 backdrop-blur-md text-blue-900 placeholder-slate-400 font-medium shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300"
              />
              <button aria-label="Search" className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-800 text-white p-3 rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md group">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-2 fill-none group-hover:stroke-yellow-400 transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 max-w-lg order-4 md:order-none">
              <button className="flex-1 bg-blue-800 text-white px-10 py-4 rounded-md shadow-xl font-bold hover:bg-blue-700 transition transform hover:scale-105">
                Buy Now
              </button>
              <button className="flex-1 bg-yellow-400 text-blue-900 px-10 py-4 rounded-md shadow-xl font-bold hover:bg-yellow-300 transition transform hover:scale-105">
                Create Account
              </button>
            </div>
            <p className="text-white font-semibold mt-6 order-5 md:order-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-blue-900 md:drop-shadow-none">
              Buy digital codes and recharges for your favorite platforms in just a few clicks.
            </p>
          </div>
        </div>
      </header>

      {/* Popular Gaming Platforms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 relative">
            <h2 className="text-2xl font-extrabold text-blue-900 bg-white inline px-4 relative z-10">Popular Gaming Platforms</h2>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -z-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition flex flex-col h-full">
              <div className="relative h-16 overflow-hidden group shrink-0">
                <img 
                  src="/playstation-bg.webp" 
                  alt="PlayStation" 
                  width="400" height="100"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <ul className="text-slate-600 space-y-2 font-bold mb-4 flex-grow flex flex-col justify-center items-center text-xl">
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> PlayStation Store Cards</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> PlayStation Plus</li>
                </ul>
                <div className="border-t-4 border-slate-100 pt-4 text-center mt-auto">
                  <button className="bg-blue-800 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-700 w-full max-w-[150px]">View Products</button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition flex flex-col h-full">
              <div className="relative h-16 overflow-hidden group shrink-0">
                <img 
                  src="/xbox-bg.webp" 
                  alt="Xbox" 
                  width="400" height="100"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <ul className="text-slate-600 space-y-3 font-bold mb-4 flex-grow flex flex-col justify-center items-center text-xl">
                  <li className="flex items-center">
                    <div className="bg-green-700 rounded-sm w-5 h-5 flex items-center justify-center mr-3 shrink-0">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    Xbox Gift Cards
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-700 rounded-sm w-5 h-5 flex items-center justify-center mr-3 shrink-0">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-white stroke-white stroke-2" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </div>
                    Xbox Game Pass
                  </li>
                </ul>
                <div className="border-t-4 border-slate-100 pt-4 text-center mt-auto">
                  <button className="bg-green-700 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-green-600 w-full max-w-[150px]">View Products</button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition flex flex-col">
              <div className="relative h-full min-h-[250px] overflow-hidden group">
                <img 
                  src="/fc24-bg.webp" 
                  alt="FC24" 
                  width="400" height="300"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-3xl font-black italic tracking-tighter drop-shadow-lg">FC24</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Gift Cards */}
      <section className="py-20 relative overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/digital-gift-cards-bg.webp" 
            alt="Digital Gift Cards Background" 
            width="1920" height="600"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-12">
             <div className="h-0.5 w-full bg-slate-700/50"></div>
             <h2 className="text-3xl md:text-4xl font-extrabold text-white px-6 shrink-0">Digital Gift Cards</h2>
             <div className="h-0.5 w-full bg-slate-700/50"></div>
          </div>
          <p className="text-slate-300 text-center mt-4 max-w-2xl mx-auto text-lg">Choose from a wide range of digital gift cards for games, entertainment, and more. Delivered instantly to your email.</p>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
            <img 
              src="/gaming-bg.webp" 
              alt="Gaming Gift Cards" 
              width="400" height="320"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start">
               <div className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">Most Popular</div>
              <h3 className="text-white font-extrabold text-2xl mb-2 drop-shadow-md">Gaming Cards</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">PlayStation, Xbox, Nintendo, Steam and more top gaming platforms.</p>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center group-hover:px-8">
                Shop Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
            <img 
              src="/entertainment-bg.webp" 
              alt="Entertainment Cards" 
              width="400" height="320"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start">
              <div className="bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">Entertainment</div>
              <h3 className="text-white font-extrabold text-2xl mb-2 drop-shadow-md">Entertainment</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">Netflix, Spotify, Apple, Google Play and other streaming services.</p>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center group-hover:px-8">
                Shop Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
            <img 
              src="/online-services-bg.webp" 
              alt="Online Services Cards" 
              width="400" height="320"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start">
               <div className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">Services</div>
              <h3 className="text-white font-extrabold text-2xl mb-2 drop-shadow-md">Online Services</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">Amazon, eBay, Uber and other essential online services.</p>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all duration-300 flex items-center group-hover:px-8">
                Shop Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Recharge */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 bg-slate-50 inline px-4 relative z-10">Mobile Recharge</h2>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -z-0"></div>
          </div>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto text-lg">Instant mobile top-ups for all major carriers. Safe, fast, and reliable service for you and your family.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 w-full relative overflow-hidden bg-blue-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                {/* Decorative circles */}
                <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-white opacity-10 rounded-full scale-150"></div>
                <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-white opacity-10 rounded-full scale-150"></div>
                
                <img 
                  src="/fast-delivery-icon.webp" 
                  alt="Fast Delivery" 
                  width="96" height="96"
                  className="w-24 h-24 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-md" 
                />
              </div>
              <div className="p-8 bg-white text-center">
                <h3 className="font-bold text-xl text-blue-900 mb-3">Fast Delivery</h3>
                <p className="text-slate-500 leading-relaxed">Top-up within seconds. Our system ensures your recharge arrives instantly after payment.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 w-full relative overflow-hidden bg-green-500 flex items-center justify-center">
                 <div className="absolute inset-0 bg-green-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                 {/* Decorative circles */}
                <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-white opacity-10 rounded-full scale-150"></div>
                <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-white opacity-10 rounded-full scale-150"></div>

                <img 
                  src="/protection-icon.webp" 
                  alt="Secure Payments" 
                  width="96" height="96"
                  className="w-24 h-24 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-md" 
                />
              </div>
              <div className="p-8 bg-white text-center">
                <h3 className="font-bold text-xl text-blue-900 mb-3">Secure Payments</h3>
                <p className="text-slate-500 leading-relaxed">Your data is safe with us. We use bank-level encryption for 100% secure transactions.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 w-full relative overflow-hidden bg-purple-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                 {/* Decorative circles */}
                <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-white opacity-10 rounded-full scale-150"></div>
                <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-white opacity-10 rounded-full scale-150"></div>

                <img 
                  src="/email-icon.webp" 
                  alt="Instant Confirmation" 
                  width="96" height="96"
                  className="w-24 h-24 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-md" 
                />
              </div>
              <div className="p-8 bg-white text-center">
                <h3 className="font-bold text-xl text-blue-900 mb-3">Instant Confirmation</h3>
                <p className="text-slate-500 leading-relaxed">Receive immediate email confirmation with your recharge details and receipt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-yellow-400 relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
         </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 bg-yellow-400 inline px-4 relative z-10">How It Works</h2>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-900/20 -z-0"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-slate-100 -z-10">
                <div className="h-full bg-gradient-to-r from-blue-200 via-blue-100 to-slate-100 w-full"></div>
             </div>

            {/* Step 1 */}
            <div className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col items-center">
                 <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm z-20">1</div>
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                 </div>
                 <h3 className="text-xl font-bold text-blue-900 mb-3">Create Account</h3>
                 <p className="text-slate-500 leading-relaxed">Sign up for free in seconds. We just need your basic details to get started.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col items-center">
                 <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm z-20">2</div>
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                 </div>
                 <h3 className="text-xl font-bold text-blue-900 mb-3">Choose & Pay</h3>
                 <p className="text-slate-500 leading-relaxed">Browse our catalog, add to cart, and pay securely with your preferred method.</p>
              </div>
            </div>

            {/* Step 3 */}
             <div className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col items-center">
                 <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm z-20">3</div>
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                 </div>
                 <h3 className="text-xl font-bold text-blue-900 mb-3">Instant Delivery</h3>
                 <p className="text-slate-500 leading-relaxed">Check your email. Your digital code arrives instantly, ready to redeem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secure & Reliable */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-center mb-4 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 bg-slate-50 inline px-4 relative z-10">Why Choose Us?</h2>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -z-0"></div>
          </div>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto text-lg relative z-10">We prioritize your security and convenience with state-of-the-art technology and dedicated support.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent -z-10 border-t-2 border-dashed border-blue-200"></div>

            <div className="flex flex-col items-center group relative">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-400 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform scale-75 group-hover:scale-110"></div>
                <div className="w-24 h-24 bg-gradient-to-br from-white to-blue-50 rounded-[2rem] border border-white shadow-xl shadow-blue-900/5 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-200">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Secure Platform</h3>
              <p className="text-slate-600 leading-relaxed">Advanced protection for all your transactions and personal data.</p>
            </div>

            <div className="flex flex-col items-center group relative">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-indigo-400 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform scale-75 group-hover:scale-110"></div>
                <div className="w-24 h-24 bg-gradient-to-br from-white to-indigo-50 rounded-[2rem] border border-white shadow-xl shadow-indigo-900/5 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-indigo-200">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-indigo-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Encrypted Data</h3>
              <p className="text-slate-600 leading-relaxed">Bank-grade 256-bit SSL encryption keeps your info safe.</p>
            </div>

            <div className="flex flex-col items-center group relative">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-teal-400 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform scale-75 group-hover:scale-110"></div>
                <div className="w-24 h-24 bg-gradient-to-br from-white to-teal-50 rounded-[2rem] border border-white shadow-xl shadow-teal-900/5 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-teal-200">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-teal-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Order History</h3>
              <p className="text-slate-600 leading-relaxed">Easily track, repeat, and manage all your past orders.</p>
            </div>

            <div className="flex flex-col items-center group relative">
              <div className="relative mb-6">
                 <div className="absolute inset-0 bg-amber-400 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform scale-75 group-hover:scale-110"></div>
                <div className="w-24 h-24 bg-gradient-to-br from-white to-amber-50 rounded-[2rem] border border-white shadow-xl shadow-amber-900/5 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-amber-200">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-amber-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Instant Delivery</h3>
              <p className="text-slate-600 leading-relaxed">Receive your digital codes via email immediately.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-yellow-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Start Recharging?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of users enjoying instant delivery, secure payments, and 24/7 support. Create your account in seconds!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-md shadow-xl font-bold hover:bg-yellow-300 transition transform hover:scale-105">
              Create Free Account
            </button>
            <button className="bg-blue-800 text-white px-10 py-4 rounded-md shadow-xl font-bold hover:bg-blue-700 transition transform hover:scale-105">
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}