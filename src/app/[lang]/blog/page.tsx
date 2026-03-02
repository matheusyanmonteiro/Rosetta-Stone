import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  // 1. Extraímos o idioma da URL
  const { lang } = await params;

  // 2. Passamos o idioma para a sua função atualizada
  const posts = getAllPosts(lang);

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">
        {lang === 'pt' ? 'Artigos e Insights' : 'Articles & Insights'}
      </h1>
      
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          // 3. Importante: O Link deve incluir o lang para não perder o idioma ao navegar
          <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className="group">
            <div className="border border-gray-200 dark:border-neutral-800 p-6 rounded-lg hover:border-blue-500 transition-colors">
              <span className="text-sm text-gray-500">{post.date}</span>
              <h2 className="text-xl font-semibold group-hover:text-blue-500">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}