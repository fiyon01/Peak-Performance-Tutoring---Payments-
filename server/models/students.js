const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    className: { type: String, required: true },
    parent_id: { type: mongoose.Schema.Types.ObjectId, ref: "Parent" },
    student_id: { type: String, unique: true }, // our custom ID
  },
  { timestamps: true }
);

// ---- Counter Schema for safe increments ----
const counterSchema = new mongoose.Schema({
  datePrefix: { type: String, unique: true },
  seq: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", counterSchema);

// ---- Helper to generate safe ID ----
async function generateStudentId() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const datePrefix = `STD${year}${month}`;

  // Atomically increment sequence
  const counter = await Counter.findOneAndUpdate(
    { datePrefix },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  const nextNumber = counter.seq;
  return `${datePrefix}-${String(nextNumber).padStart(3, "0")}`;
}

// ---- Pre-save hook (single student) ----
studentSchema.pre("save", async function (next) {
  if (!this.student_id) {
    this.student_id = await generateStudentId();
  }
  next();
});

// ---- Pre-insertMany hook (bulk students) ----
studentSchema.pre("insertMany", async function (next, docs) {
  try {
    for (let doc of docs) {
      if (!doc.student_id) {
        doc.student_id = await generateStudentId();
      }
    }
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("Student", studentSchema);
