'use client'; // Essencial para usar useEffect e useState

import { useEffect, useState } from "react";

// 1. Adicionamos 'dict' como parâmetro da função
const HeroSection = ({ dict }: { dict: any }) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 2. Agora usamos as frases que vêm do seu dicionário JSON
  // Se dict.hero.phrases não existir, ele usa um fallback vazio
  const phrases = dict?.hero?.phrases || [
    "Engenheiro de Software",
    "Especialista em ETL",
    "Data Engineering",
    "Problem Solver"
  ];

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
          if (displayText.length === phrase.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(phrase.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase, phrases]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center z-10">
        <p className="font-mono text-secondary text-sm tracking-[0.3em] mb-4 glow-green">
          {">"} SYSTEM.INIT — PORTFOLIO LOADED
        </p>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 glitch text-primary glow-cyan uppercase"
          data-text="MATHEUS MONTEIRO"
        >
          MATHEUS MONTEIRO
        </h1>

        <div className="h-12 flex items-center justify-center">
          <span className="font-mono text-xl md:text-2xl text-foreground">
            {">"} {displayText}
            <span className="animate-pulse text-primary">█</span>
          </span>
        </div>

        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="retro-border px-8 py-3 font-mono text-sm tracking-widest text-primary hover:bg-primary/10 transition-colors duration-300 pulse-glow"
          >
            [ {dict?.home?.viewProjects || 'VER PROJETOS'} ]
          </a>
          <a
            href="/MYDSA__cv__PT_p_version.pdf"
            download
            className="border border-secondary/30 px-8 py-3 font-mono text-sm tracking-widest text-secondary hover:bg-secondary/10 transition-colors duration-300"
          >
            [ {dict?.home?.downloadCv || 'BAIXAR CV'} ]
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;