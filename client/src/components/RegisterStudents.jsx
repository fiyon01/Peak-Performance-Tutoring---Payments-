import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify"

const RegisterStudents = ({ isOpen, handleClose }) => {
  const [visible, setVisible] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);



  // Sync with parent state
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        setVisible(false);
      }, 300); // duration matches transition
    }
  }, [isOpen]);

  if (!visible) return null;

  const handleSubmit = async (e) => {
  e.preventDefault();
  const toastId = toast.loading("Registering student...");

  try {
    const response = await axios.post("http://localhost:3500/api/student/register", {
      name,
      phone,
      className: studentClass,
    });

    if (response.status === 201) {
      toast.update(toastId, {
        render: response.data.message || "Student registered successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
      handleClose(); // close after success
      resetForm();
    }
  } catch (error) {
    toast.update(toastId, {
      render: error.response?.data?.message || "Error registering student",
      type: "error",
      isLoading: false,
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
    });
  } finally {
    
  }
};

// helper to reset form
const resetForm = () => {
  setName("");
  setStudentClass("");
  setPhone("");
};

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center w-screen h-screen
        bg-black/50 transition-opacity duration-300 
        ${closing ? "opacity-0" : "opacity-100"}`}
    >
      <div
        className={`bg-gray-800 rounded-lg p-8 shadow-lg w-96 relative transform transition-all duration-300 
          ${closing ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400"
          onClick={handleClose}
        >
          &times;
        </button>

        {isSubmitting && (
          <div className="absolute inset-0 bg-gray-900/75 bg-opacity-75 flex items-center justify-center rounded-lg w-full h-full">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-purple-600 h-12 w-12"></div>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-white mb-4">
          Register Students
        </h2>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="class" className="block text-white font-semibold mb-2">
              Class/Form:
            </label>
            <input
              type="text"
              id="class"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-white font-semibold mb-2">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudents;
