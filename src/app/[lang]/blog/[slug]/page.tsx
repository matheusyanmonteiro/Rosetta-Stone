// src/app/[lang]/blog/[slug]/page.tsx

import { getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Props = {
  // Agora a Promise contém tanto o slug quanto o lang
  params: Promise<{ slug: string; lang: string }>;
};

export default async function PostPage({ params }: Props) {
  // Desestruturamos slug e lang de dentro do await params
  const { slug, lang } = await params;
  
  // Passamos ambos para a função buscar na pasta correta (ex: /content/posts/pt/...)
  const post = await getPostBySlug(slug, lang);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-10 border-b border-gray-200 dark:border-neutral-800 pb-8">
          <h1 className="text-4xl font-bold mb-4">{post.metadata.title}</h1>
          <time className="text-gray-500 dark:text-neutral-400">
            {/* Ajustamos o locale da data dinamicamente conforme o idioma */}
            {new Date(post.metadata.date).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>
        </header>

        <section className="prose prose-blue dark:prose-invert lg:prose-xl max-w-none">
          <MDXRemote source={post.content} />
        </section>
      </article>
    </main>
  );
}