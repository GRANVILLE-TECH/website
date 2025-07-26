import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Articles</h1>
      <p className="text-lg text-gray-700">
        This page will contain detailed articles about AI and technology.
      </p>

      <ul className="space-y-4">
        <li>
          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Article Title 1</h2>
            <p className="text-gray-600">Brief summary of the first article.</p>
          </div>
        </li>
        <li>
          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Article Title 2</h2>
            <p className="text-gray-600">Brief summary of the second article.</p>
          </div>
        </li>
        <li>
          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Article Title 3</h2>
            <p className="text-gray-600">Brief summary of the third article.</p>
          </div>
        </li>
      </ul>

      <Link
        to="/"
        className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-md shadow"
      >
        Back to Home
      </Link>
    </div>
  );
}
