import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginBg from "../login_bg.jpg";
import Navbar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password
        },
        {
          withCredentials: true // cookies / session
        }
      );

      // ✅ role comes from backend, not user input
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
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex bg-gradient-to-r from-green-700 via-teal-600 to-blue-700">
        {/* LEFT INFO */}
        <div className="hidden md:flex flex-1 items-center justify-center p-12">
          <div className="max-w-lg text-white">
            <img
              src={loginBg}
              alt="Health"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="text-5xl font-bold mb-6">
              Smart Healthcare, Better Living
            </h2>
            <p className="text-lg">
              Secure login for patients and healthcare providers.
            </p>
          </div>
        </div>

        {/* LOGIN CARD */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mx-6">
            <h1 className="text-3xl font-bold text-center mb-6">
              Login
            </h1>

            {/* FORM */}
            <form onSubmit={handleLogin} className="space-y-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
                required
              />

              <button
                type="submit"
                className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold"
              >
                Login
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
