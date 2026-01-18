import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../login_bg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔗 Backend integration later:
    // axios.post("/api/login", { username, password, role })

    if (role === "provider") {
      navigate("/provider-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-green-700 via-teal-600 to-blue-700">
      
      {/* LEFT INFO SECTION */}
      <div className="hidden md:flex flex-1 items-center justify-center p-12">
        <div className="max-w-lg text-white">
          <img
            src={loginBg}
            alt="Health and Fitness"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Smart Healthcare, Better Living
          </h2>
          <p className="text-lg">
            Access personalized wellness tracking and professional healthcare
            services through a secure digital platform.
          </p>
        </div>
      </div>

      {/* LOGIN CARD */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mx-6">
          
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h1>

          {/* ROLE SELECT */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={() => setRole("patient")}
              className={`px-5 py-2 rounded-lg font-medium border transition ${
                role === "patient"
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              Patient
            </button>

            <button
              type="button"
              onClick={() => setRole("provider")}
              className={`px-5 py-2 rounded-lg font-medium border transition ${
                role === "provider"
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              Provider
            </button>
          </div>

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
            >
              Login as {role === "provider" ? "Provider" : "Patient"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Secure access for {role === "provider" ? "healthcare professionals" : "patients"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
