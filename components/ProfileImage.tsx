import React, { useState, useRef, useEffect } from 'react';
import { Camera, Upload } from 'lucide-react';

const STORAGE_KEY = 'portfolio_profile_image';

const ProfileImage: React.FC = () => {
  // Use a placeholder initially, or a default image URL if available
  const [imageSrc, setImageSrc] = useState<string>('https://picsum.photos/400/500');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Load image from local storage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem(STORAGE_KEY);
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageSrc(result);
        try {
          localStorage.setItem(STORAGE_KEY, result);
        } catch (e) {
          console.error("Failed to save image to local storage (likely too large)", e);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative group w-full max-w-md mx-auto md:max-w-full">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 transform hover:scale-[1.02] hover:shadow-blue-500/20 aspect-[4/5] bg-slate-100 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={triggerUpload}
      >
        <img 
          src={imageSrc} 
          alt="Profile" 
          className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-90"
        />
        
        {/* Stylized Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center space-x-2 text-white mb-2">
            <Camera className="w-5 h-5" />
            <span className="font-medium text-sm tracking-wider">更换头像</span>
          </div>
          <p className="text-white/80 text-xs">点击上传您的个人照片</p>
        </div>

        {/* Tech corners */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50 rounded-bl-lg" />
        
      </div>
      
      {/* Hidden Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleImageUpload} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Decorative Element */}
      <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-slate-200 rounded-lg hidden md:block" />
    </div>
  );
};

export default ProfileImage;