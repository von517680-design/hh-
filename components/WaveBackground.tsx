import React from 'react';

const WaveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 pointer-events-none">
      {/* Abstract Gradient Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-300/30 rounded-full blur-[120px] animate-pulse mix-blend-multiply filter" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-300/30 rounded-full blur-[120px] animate-pulse mix-blend-multiply filter animation-delay-2000" />
      <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-pink-300/30 rounded-full blur-[120px] animate-pulse mix-blend-multiply filter animation-delay-4000" />

      {/* SVG Waves */}
      <svg className="absolute bottom-0 left-0 w-full h-64 md:h-96 opacity-40" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path 
          fill="url(#gradient)" 
          fillOpacity="1" 
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-[float_8s_ease-in-out_infinite]"
        >
        </path>
        <path 
          fill="url(#gradient)" 
          fillOpacity="0.5" 
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-[float_10s_ease-in-out_infinite_reverse]"
        >
        </path>
      </svg>
      
      {/* Grid Overlay for Tech Feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
    </div>
  );
};

export default WaveBackground;