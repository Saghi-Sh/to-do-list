import axios from 'axios';
import React, { useState } from "react";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      setMessage(response.data.message);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        setMessage('Server not reachable');
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
          {/* 1st row – 4 checked circles */}
          <div className="flex justify-center md:gap-4 lg:gap-10 xl:gap-15">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md">
                <FaCheck className="text-darkTaupe" />
              </div>
            ))}
          </div>
        
          {/* 2nd row – 4 checked circles */}
          <div className="flex justify-center md:gap-4 lg:gap-10 xl:gap-15">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md">
                <FaCheck className="text-darkTaupe" />
              </div>
            ))}
          </div>
        
          {/* 3rd row – text and one checked circle */}
          <div className="flex items-center justify-center md:gap-2 lg:gap-4">
            <h2 className="md:text-[19px] lg:text-2xl font-semibold font-nunito">
              Check all your dots.
            </h2>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
              <FaCheck className="text-darkTaupe" />
            </div>
          </div>
        
          {/* 4th row – 4 empty circles */}
          <div className="flex justify-center md:gap-4 lg:gap-10 xl:gap-15">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center shadow-inner" />
            ))}
          </div>
        
          {/* 5th row – 4 empty circles */}
          <div className="flex justify-center md:gap-4 lg:gap-10 xl:gap-15">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center shadow-inner" />
            ))}
          </div>
        </div>

        {/* Right form section */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center p-12 sm:px-10 md:px-8 lg:px-12 space-y-6 mx-auto max-w-md w-full">
          <h2 className="text-2xl sm:text-3xl md:text-[21px] lg:text-[26px] font-bold text-gray-700">
            Create your account
          </h2>

          {/* Username */}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-Taupe"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-Taupe"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-1 focus:ring-Taupe w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password (not connected yet) */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-1 focus:ring-Taupe w-full"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="bg-Taupe text-white py-3 rounded-lg font-medium hover:bg-lightTaupe transition"
          >
            Sign Up
          </button>

          {message && <p className="text-center text-gray-700">{message}</p>}

          <p className="text-gray-500 text-sm text-center">
            Already have an account?{" "}
            <a href="/login" className="text-Taupe font-medium hover:underline">
              Log In
            </a>
          </p>
        </form>

      </div>
    </div>
  );
};

export default Signup;
