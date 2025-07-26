import React from "react";
import { Link } from "react-router-dom";

export default function InnovationsPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Innovations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">AI for Agriculture</h2>
          <p className="text-gray-600">
            Leveraging machine learning to optimize crop yields and reduce waste.
          </p>
          <button className="mt-4 px-4 py-2 rounded bg-blue-600 text-white">
            Learn More
          </button>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Smart Cities</h2>
          <p className="text-gray-600">
            Integrating IoT and AI to build sustainable urban environments.
          </p>
          <button className="mt-4 px-4 py-2 rounded bg-blue-600 text-white">
            Learn More
          </button>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Healthcare Robotics</h2>
          <p className="text-gray-600">
            Robots designed to assist medical professionals and improve care.
          </p>
          <button className="mt-4 px-4 py-2 rounded bg-blue-600 text-white">
            Learn More
          </button>
        </div>
      </div>

      <Link
        to="/"
        className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-4 py-2 rounded"
      >
        Back Home
      </Link>
    </div>
  );
}
