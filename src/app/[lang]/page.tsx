import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import MatrixRain from "@/components/MatrixRain";
import { getDictionary } from "@/lib/get-dictionary";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default async function Page({ params }: { params: Promise<{ lang: any }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} />
      <MatrixRain />
      <main className="relative">
        <HeroSection dict={dict} />
        <AboutSection dict={dict} />
        <ProjectsSection dict={dict} />
        <ContactSection dict={dict} />
      </main>
    </>
  );
}