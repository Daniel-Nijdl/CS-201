const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Must provide company name"],
      maxLength: 50,
    },
    position: {
      type: String,
      required: [true, "Must provide a position"],
      maxLength: 100,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["interview", "declined", "pending"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Must provide a user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
