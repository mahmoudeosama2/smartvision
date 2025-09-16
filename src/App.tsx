import React from 'react';
import { Facebook, Instagram, MessageCircle, Music } from 'lucide-react';

function App() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'bg-blue-500 hover:bg-blue-600',
      shadowColor: 'hover:shadow-blue-200'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/smart.vision.q8',
      color: 'bg-pink-500 hover:bg-pink-600',
      shadowColor: 'hover:shadow-pink-200'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: '#',
      color: 'bg-green-500 hover:bg-green-600',
      shadowColor: 'hover:shadow-green-200'
    },
    {
      name: 'TikTok',
      icon: Music,
      url: 'https://www.tiktok.com/@smart.vision.q8',
      color: 'bg-black hover:bg-gray-800',
      shadowColor: 'hover:shadow-gray-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-purple-200 to-pink-200 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clouds */}
        <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-80">☁️</div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse opacity-60">☁️</div>
        <div className="absolute top-40 left-1/4 text-4xl animate-bounce opacity-70 animation-delay-1000">☁️</div>
        
        {/* Stars */}
        <div className="absolute top-16 left-1/3 text-4xl animate-pulse text-yellow-400">⭐</div>
        <div className="absolute top-32 right-1/3 text-3xl animate-bounce text-yellow-300 animation-delay-500">⭐</div>
        <div className="absolute top-8 right-1/4 text-2xl animate-pulse text-yellow-500 animation-delay-1500">⭐</div>
        
        {/* Balloons */}
        <div className="absolute top-24 left-3/4 text-5xl animate-bounce animation-delay-300">🎈</div>
        <div className="absolute top-48 right-10 text-4xl animate-pulse animation-delay-800">🎈</div>
        <div className="absolute top-60 left-20 text-3xl animate-bounce animation-delay-1200">🎈</div>
        
        {/* Rainbow */}
        <div className="absolute top-12 right-1/2 text-6xl animate-pulse opacity-60">🌈</div>
        
        {/* Happy faces */}
        <div className="absolute bottom-32 left-10 text-4xl animate-bounce">😊</div>
        <div className="absolute bottom-40 right-16 text-3xl animate-pulse animation-delay-700">😄</div>
        
        {/* School items */}
        <div className="absolute bottom-24 left-1/3 text-4xl animate-bounce animation-delay-400">📚</div>
        <div className="absolute bottom-36 right-1/3 text-3xl animate-pulse animation-delay-900">✏️</div>
        
        {/* More decorative elements */}
        <div className="absolute top-80 left-1/2 text-4xl animate-bounce animation-delay-600">🌻</div>
        <div className="absolute bottom-20 right-1/4 text-3xl animate-pulse animation-delay-1100">🦋</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="text-center pt-8 pb-6 px-4">
          {/* Logo Placeholder */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <span className="text-3xl md:text-4xl font-bold text-white">SVK</span>
            </div>
          </div>

          {/* School Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            Smart Vision Kids
          </h1>
          
          {/* Decorative underline */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 rounded-full"></div>
          </div>
        </header>

        {/* Welcome Section */}
        <main className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border-4 border-dashed border-rainbow-gradient transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 leading-relaxed">
              Welcome to Smart Vision Kids – where learning is{' '}
              <span className="text-yellow-500">fun</span> and{' '}
              <span className="text-pink-500">joyful!</span>
            </h2>
            
            {/* Children Illustrations */}
            <div className="flex justify-center space-x-4 mb-8 text-6xl md:text-8xl">
              <span className="animate-bounce">👦</span>
              <span className="animate-bounce animation-delay-300">👧</span>
              <span className="animate-bounce animation-delay-600">🧒</span>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Join our colorful world of discovery, creativity, and endless possibilities! 
              Every day is a new adventure filled with laughter, learning, and friendship.
            </p>
          </div>
        </main>

        {/* Social Media Section */}
        <section className="max-w-2xl mx-auto px-6 pb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            Connect With Us! 🌟
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} ${social.shadowColor} text-white rounded-3xl p-6 shadow-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group`}
                >
                  <div className="text-center">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 group-hover:animate-bounce" />
                    <span className="text-sm md:text-base font-bold block group-hover:text-yellow-200 transition-colors">
                      {social.name}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
          
          {/* Fun message */}
          <div className="text-center mt-8">
            <p className="text-lg font-bold text-gray-700 bg-yellow-200/50 rounded-full px-6 py-3 inline-block">
              Follow us for daily fun and updates! 🎉
            </p>
          </div>
        </section>

        {/* Bottom decoration */}
        <div className="text-center pb-8">
          <div className="text-4xl space-x-2">
            <span className="animate-pulse">🌈</span>
            <span className="animate-bounce">🎨</span>
            <span className="animate-pulse animation-delay-300">🎪</span>
            <span className="animate-bounce animation-delay-600">🎭</span>
            <span className="animate-pulse animation-delay-900">🎪</span>
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1100 {
          animation-delay: 1.1s;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
}

export default App;