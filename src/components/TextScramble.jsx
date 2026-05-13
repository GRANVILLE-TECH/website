import React, { useState, useEffect, forwardRef } from 'react';

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const TextScramble = forwardRef(({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  progress,
  onScrambleComplete,
  ...props
}, ref) => {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const text = children;

  // Manual scroll-driven effect
  useEffect(() => {
    if (progress === undefined) return;

    const unsubscribe = progress.on("change", (latest) => {
      let scrambled = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        // Add a bit of jitter even for revealed characters if not fully at 1
        const isRevealed = latest * text.length > i;
        
        if (isRevealed) {
          // 5% chance to stay scrambled until progress is much further
          if (latest < 0.95 && Math.random() < 0.05) {
             scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
          } else {
             scrambled += text[i];
          }
        } else {
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }
      setDisplayText(scrambled);
      
      if (latest >= 1) {
        setDisplayText(text);
        onScrambleComplete?.();
      }
    });

    return () => unsubscribe();
  }, [progress, text, characterSet, onScrambleComplete]);

  // Original duration-based effect
  const scramble = async () => {
    if (isAnimating || progress !== undefined) return;
    setIsAnimating(true);

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const p = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (p * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (progress === undefined && trigger) {
      scramble();
    }
  }, [trigger, progress]);

  return (
    <Component ref={ref} className={className} {...props}>
      {displayText}
    </Component>
  );
});

TextScramble.displayName = 'TextScramble';
