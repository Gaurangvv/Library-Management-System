const mongoose = require("mongoose");

const Adminschema = new mongoose.Schema({
  username: {
    type: String,
    minlength: [3, "MINIMUM 3 CHARS REQUIRED"],
    maxlength: [20, "MAXIMUM LENGTH 20 CHARS"],
    required: true,
    unique: true,
  },
  email: {
    type: String,
    minlength: [3, "MINIMUM 3 CHARS REQUIRED"],
    maxlength: [20, "MAXIMUM LENGTH 20 CHARS"],
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: [3, "MINIMUM 3 CHARS REQUIRED"],
    maxlength: [10, "MAXIMUM LENGTH 10 CHARS"],
    required: true,
  },
});
module.exports = mongoose.model("admin", Adminschema);
