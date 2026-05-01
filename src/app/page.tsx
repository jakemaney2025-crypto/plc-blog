
import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export default function Home() {
  const posts = getAllPosts().slice(0, 5); // Show latest 5 posts

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary dark:text-blue-400">
          PLC Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Explore articles and tutorials about Programmable Logic Controllers (PLCs), industrial automation, 
          and control systems.
        </p>
        <div className="flex gap-4">
          <Link
            href="/blog"
            className="bg-primary dark:bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
          >
            Read Blog
          </Link>
          <Link
            href="/categories"
            className="border border-primary dark:border-blue-400 text-primary dark:text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Browse Categories
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Link href="/blog" className="text-primary dark:text-blue-400 hover:underline">
            View all →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-bold">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary dark:text-blue-400 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
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
          <p className="text-gray-600 dark:text-gray-400">
            No posts yet. Check back soon!
          </p>
        )}
      </section>
    </div>
  );
}
