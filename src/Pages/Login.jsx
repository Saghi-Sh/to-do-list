import React, { useState } from "react";
import axios from "axios";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/login", {
        identifier: emailOrUsername,
        password: password,
      });
      setMessage(res.data.message);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Server not reachable");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-offWhite">
      {/* Logo / app name at the top */}
      <div className="flex items-center justify-between w-full p-2 pt-8 pl-10 md:pl-20">
        <a href="/" className="font-varela text-4xl text-darkTaupe">
          Dot.
        </a>
      </div>

      {/* Card container */}
      <div className="w-5/6 sm:w-3/4 md:w-2/3 min-h-2/3 sm:min-h-[525px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden mt-10 mx-auto">
        
        {/* Left design section */}
        <div className="hidden md:grid md:w-1/2 grid-rows-5 gap-6 p-8 bg-gradient-to-tr from-lightBrown via-lightTaupe to-Cream text-gray-700">
          {[...Array(2)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-center md:gap-4 lg:gap-10 xl:gap-15">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md"
                >
                  <FaCheck className="text-darkTaupe" />
                </div>
              ))}
            </div>
          ))}
          <div className="flex items-center justify-center md:gap-2 lg:gap-4">
            <h2 className="md:text-[19px] lg:text-2xl font-semibold font-nunito">
              Check all your dots.
            </h2>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
              <FaCheck className="text-darkTaupe" />
            </div>
          </div>
          {[...Array(2)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-center md:gap-4 lg:gap-10 xl:gap-15">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center shadow-inner"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Right form section */}
        <div className="flex-1 flex flex-col justify-center p-12 sm:px-10 md:px-8 lg:px-12 space-y-6 mx-auto max-w-md w-full">
          <h2 className="text-2xl sm:text-3xl md:text-[21px] lg:text-[26px] font-bold text-gray-700">
            Welcome back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Enter your email or username"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-Taupe w-full"
              required
            />

            {/* Password input with eye toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-1 focus:ring-Taupe w-full"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Forgot password link */}
            <div className="text-right -mt-3">
              <a
                href="/forgot-password"
                className="text-sm text-Taupe hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="bg-Taupe text-white py-3 rounded-lg font-medium hover:bg-lightTaupe transition w-full"
            >
              Log In
            </button>
          </form>

          {/* Message */}
          {message && (
            <p className="text-center text-sm text-gray-600 mt-2">{message}</p>
          )}

          <p className="text-gray-500 text-sm text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-Taupe font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
