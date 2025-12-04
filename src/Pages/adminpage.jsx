import { useState } from "react";

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [pass, setPass] = useState("");

  if (!authorized) {
    return (
      <div className="p-6 flex flex-col items-center">
        <input
          type="password"
          placeholder="Enter admin password"
          className="border px-3 py-2 rounded"
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          onClick={() => pass === "admin123" && setAuthorized(true)}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="text-gray-700">Welcome Admin — No backend connected yet.</p>
    </div>
  );
}
