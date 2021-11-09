const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Must provide a name"],
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
    values: ["interview", "declined", "pending"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Must provide a user"],
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Job", jobSchema);

