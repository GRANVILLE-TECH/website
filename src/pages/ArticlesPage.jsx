import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticlesPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Articles</h1>
      <p className="text-lg text-gray-700">Explore articles about AI and innovation.</p>

      <ul className="space-y-4">
        {[1, 2, 3].map((i) => (
          <li key={i} className="border p-4 rounded-lg hover:shadow transition">
            <h2 className="font-semibold text-xl">Article {i}</h2>
            <p className="text-gray-600">
              This is a short summary of article {i}. Click through to learn more.
            </p>
          </li>
        ))}
      </ul>

      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded shadow"
      >
        Back to Home
      </Link>
    </div>
  );
}
