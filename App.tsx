import React, { useState } from 'react';
import { Menu, X, ArrowRight, MousePointer2, Linkedin, Mail, Github } from 'lucide-react';
import WaveBackground from './components/WaveBackground';
import Typewriter from './components/Typewriter';
import ProfileImage from './components/ProfileImage';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 relative selection:bg-blue-200 selection:text-blue-900">
      <WaveBackground />

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest uppercase hover:text-blue-600 transition-colors cursor-pointer">
            ZHANG JIAHUI
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-slate-600">
            <a href="#work" className="hover:text-slate-900 transition-colors relative group">
              作品案例
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors relative group">
              关于我
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors relative group">
              联系方式
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-xl">
            <a href="#work" className="text-lg font-medium text-slate-800" onClick={() => setIsMenuOpen(false)}>作品案例</a>
            <a href="#about" className="text-lg font-medium text-slate-800" onClick={() => setIsMenuOpen(false)}>关于我</a>
            <a href="#contact" className="text-lg font-medium text-slate-800" onClick={() => setIsMenuOpen(false)}>联系方式</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main id="about" className="pt-32 md:pt-0 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
            
            {/* Left Column: Text */}
            <div className="flex-1 w-full order-2 md:order-1">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Open to Work</span>
              </div>

              <Typewriter 
                staticText="将人工智能技术融入"
                cyclingTexts={["视觉设计", "品牌体验", "创意生产"]} 
              />

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 font-light">
                我是<span className="font-semibold text-slate-900">张嘉辉</span>，一名<span className="font-semibold text-slate-900">资深艺术总监</span>。
                我致力于利用前沿生成式AI工具，重塑设计流程，为品牌创造兼具美学价值与商业效能的卓越解决方案。
                从概念构思到最终交付，我确保每一个像素都精准服务于用户体验。
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#work" className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 flex items-center group">
                  查看作品集
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="mailto:hello@example.com" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-medium transition-all hover:border-slate-400 hover:bg-slate-50 flex items-center">
                  联系我
                </a>
              </div>

              {/* Tech Stack Icons (Decorative) */}
              <div className="mt-12 pt-8 border-t border-slate-200/60 flex items-center space-x-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Tools:</div>
                {/* Simple placeholders for tool icons */}
                <div className="h-6 w-6 bg-slate-800 rounded-sm flex items-center justify-center text-white text-[8px] font-bold">PS</div>
                <div className="h-6 w-6 bg-purple-600 rounded-sm flex items-center justify-center text-white text-[8px] font-bold">AI</div>
                <div className="h-6 w-6 bg-black rounded-sm flex items-center justify-center text-white text-[8px] font-bold">FIG</div>
                <div className="h-6 w-6 bg-orange-500 rounded-sm flex items-center justify-center text-white text-[8px] font-bold">MJ</div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex-1 w-full max-w-md md:max-w-[400px] order-1 md:order-2 relative">
              {/* Mouse Cursor Decorative Element */}
              <div className="absolute -bottom-8 -left-8 z-20 hidden md:block animate-float">
                <MousePointer2 className="w-12 h-12 text-slate-900 drop-shadow-xl fill-white stroke-[1.5]" />
              </div>
              
              <ProfileImage />
            </div>

          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer id="contact" className="py-8 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2024 Zhang Jiahui. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20} /></a>
            <a href="mailto:hello@example.com" className="text-slate-400 hover:text-pink-600 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;