const mongoose = require("mongoose");

const Authorschema = new mongoose.Schema({
  authorname: {
    type: String,
    minlength: [3, "MINIMUM 3 CHARS REQUIRED"],
    maxlength: [20, "MAXIMUM LENGTH 20 CHARS"],
    required: true,
  },
  nationality: {
    type: String,
    minlength: [3, "MINIMUM 3 CHARS REQUIRED"],
    maxlength: [20, "MAXIMUM LENGTH 20 CHARS"],
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("author", Authorschema);
