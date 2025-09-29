import React, { useState,useEffect } from "react";
import { MdDelete, MdAdd } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const ProgramRegistrations = ({ isRegOpen, handleClose }) => {
  const [students, setStudents] = useState([
    { name: "", className: "", phone: "" },
  ]);

  const [parents, setParents] = useState([
    { parent_name: "", phone: "", email: "" },
  ]);

  // ✅ handle parent inputs separately
  const handleParentChange = (index, field, value) => {
    const updated = [...parents];
    updated[index][field] = value;
    setParents(updated);
  };

  // ✅ handle student inputs
  const handleChange = (index, field, value) => {
    const updated = [...students];
    updated[index][field] = value;
    setStudents(updated);
  };

  // add new student row
  const addStudent = () => {
    setStudents([...students, { name: "", className: "", phone: "" }]);
  };

  // delete student row
  const handleDelete = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  useEffect(() => {
  if (isRegOpen) {
    document.body.classList.add("overflow-hidden"); // prevent background scroll
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return () => document.body.classList.remove("overflow-hidden");
}, [isRegOpen]);


  // bulk registration API call
  const handleRegistrations = async () => {
    const toastId = toast.loading("Registering students...");
    try {
      const response = await axios.post(
        "http://localhost:3500/api/students/register-bulk",
        { parents, students } // ✅ send both parent + student info
      );
      if (response.status === 201) {
        toast.update(toastId, {
          render: response.data.message || "Registration successful!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
        handleClose();
        setStudents([{ name: "", className: "", phone: "" }]);
        setParents([{ parent_name: "", phone: "", email: "" }]);
      }
    } catch (error) {
      toast.update(toastId, {
        render: error.response?.data?.message || "Error registering students",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  };

  if (!isRegOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black/50 z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-6xl flex flex-col md:flex-row gap-6 relative border border-indigo-400 shadow-md shadow-indigo-500/30 ">
        {/* Scrollable content */}
        <div className="flex-1 max-h-[60vh] md:max-h-[80vh] overflow-y-auto pr-4">
          <h1 className="text-3xl text-center text-white font-bold mb-4">
            Student Tuition Registration
          </h1>
          <p className="text-white mb-4">
            <span className="font-semibold">Instructions:</span> Enter parent &
            student details. You can add multiple students before submitting.
          </p>

          {/* Parent Section */}
          <h2 className="text-lg text-white mt-4">Parent's Details</h2>
          <table className="table-auto min-w-full border-collapse border border-gray-600 text-white mt-2">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-3 py-2 border">Full Name</th>
                <th className="px-3 py-2 border">Phone Number</th>
                <th className="px-3 py-2 border">Email</th>
              </tr>
            </thead>
            <tbody>
              {parents.map((parent, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="border p-2">
                    <input
                      type="text"
                      className="p-2 rounded-md w-full text-white border border-gray-400 focus:outline-none"
                      value={parent.name}
                      onChange={(e) =>
                        handleParentChange(index, "parent_name", e.target.value)
                      }
                      placeholder="Parent Name" required
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="p-2 rounded-md w-full text-white border border-gray-400 focus:outline-none"
                      value={parent.phone}
                      onChange={(e) =>
                        handleParentChange(index, "phone", e.target.value)
                      }
                      placeholder="Phone Number" required
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="email"
                      className="p-2 rounded-md w-full text-white border border-gray-400 focus:outline-none"
                      value={parent.email}
                      onChange={(e) =>
                        handleParentChange(index, "email", e.target.value)
                      }
                      placeholder="Email"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Student Section */}
          <h2 className="text-lg text-white mt-6">Student's Details</h2>
          <table className="table-auto min-w-full border-collapse border border-gray-600 text-white mt-2">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-3 py-2 border">Student's Name</th>
                <th className="px-3 py-2 border">Class</th>
                <th className="px-3 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="border p-2">
                    <input
                      type="text"
                      className="p-2 rounded-md w-full text-white border border-gray-400 focus:outline-none"
                      value={student.name}
                      onChange={(e) =>
                        handleChange(index, "name", e.target.value)
                      }
                      placeholder="Student Name" required
                    />
                  </td>
                  <td className="border p-2">
                    <select
                      className="p-2 rounded-md w-full bg-gray-800 text-white"
                      value={student.className}
                      onChange={(e) =>
                        handleChange(index, "className", e.target.value)
                      } required
                    >
                      <option value="">Select Class</option>
                      <option value="Form 2">Form 2</option>
                      <option value="Form 3">Form 3</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                    </select>
                  </td>
                  <td className="border p-2 text-center">
                    <button
                      className="bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-700 transform hover:scale-105 transition duration-300"
                      onClick={() => handleDelete(index)}
                    >
                      <MdDelete size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
              onClick={addStudent}
            >
              <MdAdd size={20} /> Add Student
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              onClick={handleRegistrations}
            >
              Submit All
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-indigo-700 shadow-lg border-2 border-indigo-500 p-4 rounded-lg w-full md:w-1/3 max-h-[80vh] overflow-y-auto">
          <h2 className="text-white text-xl font-semibold mb-2">Preview:</h2>
        <h2 className="text-white text-md font-semibold mb-2">Parent's Details</h2>

          <ul className="text-gray-200 space-y-2">
            {parents.map((parent, index) =>
              parent.parent_name ||parent.phone || parent.email ? (
                <li
                  key={index}
                  className="bg-indigo-800 p-2 rounded-md flex flex-col gap-1"
                >
                  <span>Name: {parent.parent_name || "-"}</span>
                  <span>Phone Number: {parent.phone || "-"}</span>
                  <span>Email: {parent.email || "-"}</span>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramRegistrations;
