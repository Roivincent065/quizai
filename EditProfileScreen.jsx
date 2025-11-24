import { useState } from "react";
import { useStore } from "../store/useStore";
import { useToast } from "../hooks/useToast";

export default function EditProfileScreen() {
  const { user, setUser } = useStore();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "user",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Update Zustand store
      setUser(formData);

      // Update localStorage
      localStorage.setItem("quizArenaUser", JSON.stringify(formData));

      showToast("Profile updated successfully ✅", "success");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Edit Profile
        </h2>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Role</label>
            <select
              name="role"
              className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
