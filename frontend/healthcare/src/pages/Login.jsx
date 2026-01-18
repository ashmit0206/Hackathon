import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import loginBg from "../login_bg.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("patient");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {
          email,
          password,
          role
        },
        {
          withCredentials: true
        }
      );

      const userRole = res.data.data.user.role;

      if (userRole === "provider") {
        navigate("/provider-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex bg-gradient-to-r from-green-700 via-teal-600 to-blue-700">
        {/* LEFT INFO PANEL */}
        <div className="hidden md:flex flex-1 items-center justify-center p-12">
          <div className="max-w-lg text-white">
            <img
              src={loginBg}
              alt="Healthcare"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="text-5xl font-bold mb-6">
              Smart Healthcare, Better Living
            </h2>
            <p className="text-lg">
              Secure access for patients and healthcare providers.
            </p>
          </div>
        </div>

        {/* LOGIN CARD */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mx-6">
            <h1 className="text-3xl font-bold text-center mb-6">
              Login
            </h1>

            {/* ROLE SELECTION */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                type="button"
                onClick={() => setRole("patient")}
                className={`px-5 py-2 rounded-lg border transition ${
                  role === "patient"
                    ? "bg-teal-600 text-white"
                    : "bg-white"
                }`}
              >
                Patient
              </button>

              <button
                type="button"
                onClick={() => setRole("provider")}
                className={`px-5 py-2 rounded-lg border transition ${
                  role === "provider"
                    ? "bg-teal-600 text-white"
                    : "bg-white"
                }`}
              >
                Provider
              </button>
            </div>

            {/* LOGIN FORM */}
            <form onSubmit={handleLogin} className="space-y-5">
              <input
                type="email"
                name="email"
                defaultValue="binit006@gmail.com"
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                type="password"
                name="password"
                defaultValue="Password123"
                className="w-full p-3 border rounded-lg"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold disabled:opacity-60"
              >
                {loading ? "Logging in..." : `Login as ${role}`}
              </button>
            </form>

            {error && (
              <p className="text-red-500 text-center mt-4">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
