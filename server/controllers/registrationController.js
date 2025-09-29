const { saveStudent,saveBulkStudents} = require("../services/students.service");

const registerStudent = async (req, res) => {
  console.log("📩 Incoming student registration:", req.body);

  const { name, phone, className } = req.body;

  try {
    const newStudent = await saveStudent({ name, phone, className });
    res.status(201).json({
      message: "Student registered successfully",
      student: newStudent
    });
  } catch (error) {
    console.error("❌ Error in registerStudent:", error);
    res.status(500).json({ message: "Error registering student: " + error.message });
  }
};

//register bulk students manually
const registerBulkstudents = async (req, res) => {
  console.log("📩 Incoming bulk student registration:", req.body);

  const { students,parents } = req.body; // ✅ correctly extract the array

  try {
    const regStudents = await saveBulkStudents(students,parents); // ✅ pass only the array
    res.status(201).json({ 
      message: "Students registered successfully", 
      regStudents 
    });
  } catch (error) {
    console.error("❌ Error in registerBulkStudents:", error);
    res.status(500).json({ 
      message: "Error registering students: " + error.message 
    });
  }
};



module.exports = { registerStudent,registerBulkstudents };
