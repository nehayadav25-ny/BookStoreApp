import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";

// Single Course Card (for one course item)
function CourseCard({ course }) {
  return (
    <div>
      <h2>{course?.title}</h2>
      <p>{course?.description}</p>
    </div>
  );
}

// Courses Page (fetches and shows all courses/books)
function Courses() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-300">Here!</span>
        </h1>
        <p className="mt-12">
          Our bookstore offers engaging courses designed to enhance reading
          habits, improve comprehension, and explore literature deeply.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
