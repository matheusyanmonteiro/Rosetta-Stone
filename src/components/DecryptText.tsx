'use client';

import { useDecrypt } from "@/hooks/useDecrypt";

interface DecryptTextProps {
  text: string;
  className?: string;
}

export default function DecryptText({ text, className }: DecryptTextProps) {
  const { displayText, setIsHovering } = useDecrypt(text);

  return (
    <span 
      className={`font-mono transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
}