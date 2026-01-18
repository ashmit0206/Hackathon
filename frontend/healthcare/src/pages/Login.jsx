import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import loginBg from "../login_bg.jpg"; // optional background image

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers
      ? JSON.parse(savedUsers)
      : [
          { gstin: "27AAAPL1234C1ZV", pass: "password123!", companies: [] },
          { gstin: "07BBJPM5678D1XM", pass: "securePass456", companies: [] },
          { gstin: "33CCXPL2345E2ZK", pass: "admin@789", companies: [] },
        ];
  });

  const [isSignup, setIsSignup] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleLogin = (e) => {
    e.preventDefault();
    const gstin = e.target.u.value.trim();
    const password = e.target.p.value.trim();

    const user = users.find((u) => u.gstin === gstin);

    if (!user) {
      setErrorField("gstin");
      setErrorMessage("GSTIN not found. Please signup first.");
      return;
    }

    if (user.pass !== password) {
      setErrorField("password");
      setErrorMessage("Incorrect password. Try again.");
      return;
    }

    setErrorField("");
    setErrorMessage("");
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("gstin", gstin);
    setIsLoggedIn?.(true);

    // Redirect depending on whether user already selected companies
    if (!user.companies || user.companies.length === 0) {
      navigate("/ChooseCompany");
    } else {
      navigate("/ListCards");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const gstin = e.target.u.value.trim();
    const password = e.target.p.value.trim();

    if (users.find((u) => u.gstin === gstin)) {
      setErrorField("gstin");
      setErrorMessage("GSTIN already exists. Please login.");
      return;
    }

    const newUser = { gstin, pass: password, companies: [] };
    setUsers((prev) => [...prev, newUser]);
    localStorage.setItem("currentUser", JSON.stringify(newUser)); // save new user
    setErrorField("");
    setErrorMessage("");
    setIsSignup(false);

    alert("Signup successful! Please choose your companies next.");
    navigate("/ChooseCompany"); // Go directly to choose company
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900">
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="max-w-lg">
          {/* <img
            src={loginBg}
            alt="background"
            className="w-full h-64 object-cover mb-4 rounded"
          /> */}
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Efficient Distribution for Your Business
          </h2>
          <p className="text-white text-lg">
            Streamline your supply chain with our advanced distribution services.
          </p>
        </div>
      </div>

      <div className="max-w-sm p-8 bg-white rounded-lg shadow-md m-8 self-center transform -translate-x-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isSignup ? "Sign Up" : "Login"}
        </h1>

        <form
          onSubmit={isSignup ? handleSignup : handleLogin}
          className="space-y-4"
        >
          <input
            type="text"
            name="u"
            placeholder="GSTIN"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errorField === "gstin"
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
            required
          />
          <input
            type="password"
            name="p"
            placeholder="Password"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errorField === "password"
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>

          {errorMessage && (
            <p className="text-red-500 text-center mt-2 font-medium">
              {errorMessage}
            </p>
          )}
        </form>

        <p className="text-center mt-4 text-gray-600">
          {isSignup ? "Already have an account?" : "New user?"}{" "}
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setErrorMessage("");
            }}
            className="text-blue-500 font-semibold hover:underline"
          >
            {isSignup ? "Login here" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
