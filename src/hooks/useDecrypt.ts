'use client';

import { useState, useEffect, useCallback } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+<>?/{}[]';

export const useDecrypt = (text: string) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  const decrypt = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.split("").map((_, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    if (isHovering) {
      decrypt();
    } else {
      setDisplayText(text);
    }
  }, [isHovering, decrypt, text]);

  return { displayText, setIsHovering };
};