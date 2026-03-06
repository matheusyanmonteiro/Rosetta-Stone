import { Orbitron, Share_Tech_Mono, Rajdhani } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeVisuals from "@/components/ThemeVisuals";
import Navbar from "@/components/Navbar";
import AudioPlayer from "@/components/AudioPlayer";
import { getDictionary } from "@/lib/get-dictionary";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
});

const shareTech = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: any }>;
}) {
  const { lang } = await params;
    const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning> 
      <body className="antialiased overflow-x-hidden font-body bg-background text-foreground">
      <ThemeProvider>
      <ThemeVisuals />
      <Navbar dict={dict} />
      {children}
      <AudioPlayer /> {/* Ele fica no canto oposto ao MobileMenu */}
</ThemeProvider>
      </body>
    </html>
  );
}