import React from 'react';
import Link from 'next/link';
import { getPostsByCategory, getCategories } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    category,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  return {
    title: `${params.category} - PLC Blog`,
    description: `Blog posts in the ${params.category} category.`,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = getPostsByCategory(params.category);

  return (
    <div>
      <Link href="/categories" className="text-primary dark:text-blue-400 hover:underline mb-6 inline-block">
        ← Back to Categories
      </Link>

      <h1 className="text-4xl font-bold mb-2">{params.category}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
      </p>

      {posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary dark:text-blue-400 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {formatDate(post.date)}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {post.excerpt}
              </p>
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No posts in this category.</p>
      )}
    </div>
  );
}
