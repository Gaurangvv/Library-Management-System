const mongoose = require("mongoose");

const Bookschema = new mongoose.Schema({
  bookname: {
    type: String,
    minlength: [3, "MINIMUM 3 CHARS REQUIRED"],
    maxlength: [20, "MAXIMUM LENGTH 20 CHARS"],
    required: true,
  },
  bookauthor: {
    type: String,
    minlength: [3, "MINIMUM 3 CHARS REQUIRED"],
    maxlength: [20, "MAXIMUM LENGTH 20 CHARS"],
    required: true,
  },
  availablebooks: {
    type: Number,
    minlength: [1, "min availablebooks can be 9 "],
    maxlength: [2, "max availablebooks can be 99 "],
    required: true,
  },
});
module.exports = mongoose.model("book", Bookschema);
