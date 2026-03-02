import { getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-10 border-b border-gray-200 dark:border-neutral-800 pb-8">
          <h1 className="text-4xl font-bold mb-4">{post.metadata.title}</h1>
          <time className="text-gray-500 dark:text-neutral-400">
            {new Date(post.metadata.date).toLocaleDateString('pt-BR', {
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