'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  
  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-2 font-mono text-[10px] tracking-widest border-l border-primary/20 pl-4 ml-4">
      <Link
        href={redirectedPathname("pt")}
        className={`px-2 py-0.5 transition-all ${
          pathname.startsWith("/pt") 
            ? "bg-primary text-background glow-cyan" 
            : "text-primary/40 hover:text-primary"
        }`}
      >
        [ PT-BR ]
      </Link>
      <Link
        href={redirectedPathname("en")}
        className={`px-2 py-0.5 transition-all ${
          pathname.startsWith("/en") 
            ? "bg-primary text-background glow-cyan" 
            : "text-primary/40 hover:text-primary"
        }`}
      >
        [ EN-US ]
      </Link>
    </div>
  );
};

export default LanguageSwitcher;