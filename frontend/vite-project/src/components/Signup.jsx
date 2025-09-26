import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Login from "./Login";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [showLogin, setShowLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successful");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        if (err.response) toast.error("Error: " + err.response.data.message);
      });
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-gray-100/30 backdrop-blur-sm"></div>

        {/* Modal Box - Gradient from Coolors link */}
        <div
          className="relative rounded-2xl shadow-xl w-full max-w-md p-8 z-50 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #ebf4f5, #b5c6e0)", // gradient from your Coolors link
          }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black font-bold text-xl transition-all duration-300"
            onClick={() => navigate("/")}
          >
            ✕
          </button>

          {/* Heading */}
          <h2 className="text-2xl font-semibold mb-6 text-center text-black tracking-wide">
            Create Your Account
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 flex flex-col"
          >
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-teal-300 hover:shadow-md transition-all duration-300 text-black font-normal placeholder:text-black/50 bg-white/80"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-xs text-red-500 mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-teal-300 hover:shadow-md transition-all duration-300 text-black font-normal placeholder:text-black/50 bg-white/80"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-teal-300 hover:shadow-md transition-all duration-300 text-black font-normal placeholder:text-black/50 bg-white/80"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-xs text-red-500 mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium shadow-md transition-all duration-300 hover:from-cyan-500 hover:to-blue-600"
              >
                Signup
              </button>

              <button
                type="button"
                className="underline text-black font-medium hover:text-teal-700 transition-all duration-300 text-center sm:text-left"
                onClick={() => setShowLogin(true)}
              >
                Already have an account? Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Signup;
