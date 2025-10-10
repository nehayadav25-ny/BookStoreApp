import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

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

    try {
      const res = await axios.post("http://localhost:4000/user/signup", userInfo);
      if (res.data) {
        toast.success("Signup Successful");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-12">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6 border border-gray-700">
        <h2 className="text-3xl font-bold text-blue-400 text-center">Create Your Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-200 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-400"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-xs text-red-500 mt-1">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-200 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-400"
              {...register("email", { required: true })}
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
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-400"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-500 mt-1">This field is required</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
            <button
              type="submit"
              className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-md hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
            >
              Signup
            </button>

            <Link
              to="/login"
              className="text-center sm:text-left text-blue-400 hover:text-blue-300 font-medium underline transition-colors duration-300"
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
