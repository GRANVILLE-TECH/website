import React from "react";
import { Link } from "react-router-dom";

export default function InnovationsPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Innovations</h1>
      <p>
        This page will showcase innovative projects and research that push the
        boundaries of technology.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Innovation One</h2>
          <p className="mb-4 text-silver">
            Placeholder description for the first innovation project.
          </p>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white">
            Learn More
          </button>
        </div>
        <div className="border rounded-xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Innovation Two</h2>
          <p className="mb-4 text-silver">
            Placeholder description for the second innovation project.
          </p>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white">
            Learn More
          </button>
        </div>
        <div className="border rounded-xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Innovation Three</h2>
          <p className="mb-4 text-silver">
            Placeholder description for the third innovation project.
          </p>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white">
            Learn More
          </button>
        </div>
      </div>
      <Link
        to="/"
        className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white"
      >
        Back Home
      </Link>
    </div>
  );
}
