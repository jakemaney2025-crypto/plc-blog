import React from 'react';
import Link from 'next/link';
import { getCategories, getPostsByCategory } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export const metadata = {
  title: 'Categories - PLC Blog',
  description: 'Browse blog posts by category.',
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Categories</h1>

      {categories.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => {
            const posts = getPostsByCategory(category);
            return (
              <div
                key={category}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2">
                  <Link
                    href={`/categories/${category}`}
                    className="text-primary dark:text-blue-400 hover:underline"
                  >
                    {category}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                </p>
                <div className="space-y-2">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary dark:text-blue-400 hover:underline block"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {formatDate(post.date)}
                      </p>
                    </div>
                  ))}
                  {posts.length > 3 && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 pt-2">
                      +{posts.length - 3} more
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No categories found.</p>
      )}
    </div>
  );
}
