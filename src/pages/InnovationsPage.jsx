import React from 'react';
import { Link } from 'react-router-dom';

export default function InnovationsPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Innovations</h1>
      <p className="text-lg text-gray-700">Discover the latest AI innovations and projects.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="border rounded-xl p-6 hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold">Innovation {i}</h2>
            <p className="text-gray-600 mt-2">Brief description of innovation project {i}.</p>
          </div>
        ))}
      </div>

      <Link to="/" className="inline-block mt-6 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded shadow">
        Back to Home
      </Link>
    </div>
  );
}
