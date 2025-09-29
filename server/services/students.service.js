const db = require('../config/db'); // Simulated database module
const Student = require("../models/students");
const Parent = require("../models/parents");


const saveStudent = async ({ name,className}) => {
  try {
    // Await the query result
    const result = await Student.findOne({ name });

    if (result) {
      throw new Error("Student already exists");
    }

    // Save the new student
    const newStudent = await Student.create({ name,className });
    return newStudent;
  } catch (error) {
    throw new Error("Error saving student: " + error.message);
  }
};


const saveBulkStudents = async (students, parents) => {
  try {
    if (!parents || parents.length === 0) {
      throw new Error("At least one parent is required.");
    }

    // 1. Save parent(s) first
    const cleanedParents = parents.map(p => ({
      name: p.parent_name?.trim() || "",
      phone: p.phone?.trim() || "",
      email: p.email?.trim() || ""
    }));

    const newParents = await Parent.insertMany(
      cleanedParents.filter(p => p.name && p.phone) // require basic info
    );

    if (newParents.length === 0) {
      throw new Error("No valid parent found to assign students.");
    }

    // 👉 Assume for now all students belong to the *first* parent
    const parentId = newParents[0]._id;

    // 2. Clean and assign students to parent
    const cleanedStudents = students
      .filter(s => s.name && s.className)
      .map(s => ({
        name: s.name.trim(),
        className: s.className.trim(),
        phone: s.phone?.trim() || "",
        parent_id: parentId
      }));

    if (cleanedStudents.length === 0) {
      throw new Error("No valid students to save.");
    }

    // 3. Save students
    const newStudents = await Student.insertMany(cleanedStudents);

    return { newParents, newStudents };

  } catch (error) {
    console.error("❌ Error in saveBulkStudents:", error);
    throw new Error("Error saving bulk students: " + error.message);
  }
};

module.exports = { saveStudent,saveBulkStudents};
