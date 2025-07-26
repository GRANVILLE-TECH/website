import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Articles</h1>

      <ul className="space-y-4">
        <li>
          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">How AI is Reshaping Innovation</h2>
            <p className="text-gray-600">A quick look at how artificial intelligence drives new breakthroughs.</p>
          </div>
        </li>
        <li>
          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">The Rise of Quantum Computing</h2>
            <p className="text-gray-600">Discover what quantum computers mean for the future of technology.</p>
          </div>
        </li>
        <li>
          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Exploring the Metaverse</h2>
            <p className="text-gray-600">A brief teaser on how virtual worlds are merging with reality.</p>
          </div>
        </li>
      </ul>

      <Link
        to="/"
        className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-4 py-2 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
}
