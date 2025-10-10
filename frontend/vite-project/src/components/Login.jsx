import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4000/user/login", userInfo);
      if (res.data) {
        toast.success("Logged in Successfully ✅");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate("/", { replace: true });
        window.location.reload();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-12">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">Login to Your Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-200 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="username"
              {...register("email", { required: true })}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-1">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-200 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              {...register("password", { required: true })}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <span className="text-xs text-red-500 mt-1">This field is required</span>
            )}
          </div>

          {/* Buttons / Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto py-2.5 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-md hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
            >
              Login
            </button>

            <p className="text-gray-300 text-sm text-center sm:text-left">
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
