import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form data:", formData);

    try {
      const res = await axios.post("https://bookstoreapp-b.onrender.com", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        toast.success("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(res.data.message || "Failed to send message ❌");
      }
    } catch (error) {
      console.error("Axios error:", error.response || error);
      toast.error(
        error.response?.data?.message || "Server error! Could not send message ❌"
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center justify-start px-6 py-16 text-gray-100">
        <Toaster position="top-center" />

        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-6">
          Contact Us
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-center text-gray-300 mb-12">
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hello — feel free to reach out anytime.
        </p>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start w-full max-w-5xl">
          {/* Contact Info */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md w-full md:w-1/3 text-center md:text-left space-y-4 border border-gray-700">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Contact Info</h2>
            <p>
              <span className="text-blue-400 font-semibold">📞 Phone:</span> +91
              7060889288 , +91 7060201293
            </p>
            <p>
              <span className="text-blue-400 font-semibold">📧 Email:</span>{" "}
              nehayadav2860@gmail.com
            </p>
            <p>
              <span className="text-blue-400 font-semibold">📍 Address:</span>{" "}
              Invertis University, Bareilly
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full md:w-2/3 space-y-4 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-4 text-center">
              Send a Message
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-400"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} My Bookstore. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Contact;
