'use client';

import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Forçamos a URL a ignorar o roteamento do Next.js
  const audioSrc = "/init.mp3?v=1"; // O ?v=1 ajuda a evitar cache de erro antigo

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Garantimos que o volume esteja baixo antes de tocar
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(err => console.log("Erro ao tocar:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[110] flex items-center gap-3 font-mono text-[10px]">
      {/* ... seu código do visualizer ... */}
      
      <button onClick={toggleAudio} className="border border-primary/30 px-2 py-1 uppercase">
        {isPlaying ? '[ AUDIO_ON ]' : '[ AUDIO_MUTED ]'}
      </button>

      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
      />
    </div>
  );
}