import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  staticText: string;
  cyclingTexts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  staticText,
  cyclingTexts,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [stage, setStage] = useState<'static' | 'dynamic'>('static');

  useEffect(() => {
    const handleTyping = () => {
      // Phase 1: Typing the static part "将人工智能技术融入 "
      if (stage === 'static') {
        if (charIndex < staticText.length) {
          setDisplayText(staticText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Static part done, move to dynamic part
          setStage('dynamic');
          setCharIndex(0);
        }
        return;
      }

      // Phase 2: Cycling through the dynamic parts
      const i = loopNum % cyclingTexts.length;
      const fullDynamicText = cyclingTexts[i];

      if (isDeleting) {
        setDisplayText(staticText + " " + fullDynamicText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setDisplayText(staticText + " " + fullDynamicText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      // Check if word is complete
      if (!isDeleting && charIndex === fullDynamicText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    loopNum,
    stage,
    staticText,
    cyclingTexts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
      <span className="text-slate-900">{displayText.substring(0, staticText.length)}</span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
        {displayText.substring(staticText.length)}
      </span>
      <span className="inline-block w-1 h-[1em] align-middle ml-1 bg-slate-900 animate-cursor-blink"></span>
    </h1>
  );
};

export default Typewriter;