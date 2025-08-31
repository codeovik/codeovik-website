// app/admin/page.tsx
"use client";

import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "buka-cuda") {
      setIsAuthenticated(true);
    } else {
      alert("❌ Wrong password! Try again.");
    }
  };

  if (isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg text-center border border-gray-700">
          <h1 className="text-3xl font-bold mb-4">✅ Dear Admin</h1>
          <p className="text-lg mb-6">
            Your database URL:
          </p>
          <a
            href="https://docs.google.com/spreadsheets/d/1oDwN5g4azqh4dG_VkGuaM4OUF7cvxk8K37z4IF2nNAw/edit?gid=0#gid=0"
            target="_blank"
            className="text-blue-400 hover:underline text-lg font-medium break-all"
          >
            https://docs.google.com/spreadsheets/d/1oDwN5g4azqh4dG_VkGuaM4OUF7cvxk8K37z4IF2nNAw/edit?gid=0#gid=0
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-indigo-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-white/20"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          🔐 Admin Login
        </h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-lg bg-gray-900/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-transform"
        >
          Login
        </button>
      </form>
    </div>
  );
}
