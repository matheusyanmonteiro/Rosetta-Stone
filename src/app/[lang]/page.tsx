// src/app/[lang]/page.tsx
import { getDictionary } from '@/lib/get-dictionary';
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/data/projects"; // Importamos apenas o TIPO

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'pt' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  console.log("Conteúdo do dicionário:", dict);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-12">{dict.home.title}</h1>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* O dict.projects agora vem do seu JSON correspondente ao idioma */}
        {dict.projects?.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  );
}