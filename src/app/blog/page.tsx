import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export const metadata = {
  title: 'Blog - PLC Blog',
  description: 'All blog posts about Programmable Logic Controllers and industrial automation.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>

      {posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-2xl font-bold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary dark:text-blue-400 hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm whitespace-nowrap">
                  {post.category}
                </span>
              </div>
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
        <p className="text-gray-600 dark:text-gray-400">No posts found.</p>
      )}
    </div>
  );
}
