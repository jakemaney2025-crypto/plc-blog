import React from 'react';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} - PLC Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <article>
      {/* Back Link */}
      <Link href="/blog" className="text-primary dark:text-blue-400 hover:underline mb-6 inline-block">
        ← Back to Blog
      </Link>

      {/* Post Header */}
      <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              {formatDate(post.date)}
            </p>
            <span className="inline-block mt-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <div className="prose dark:prose-invert max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-12">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Tags:</p>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      {(prevPost || nextPost) && (
        <nav className="border-t border-gray-200 dark:border-gray-700 pt-8 flex justify-between">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="text-primary dark:text-blue-400 hover:underline"
            >
              ← Previous: {prevPost.title}
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="text-primary dark:text-blue-400 hover:underline text-right"
            >
              Next: {nextPost.title} →
            </Link>
          ) : null}
        </nav>
      )}
    </article>
  );
}
