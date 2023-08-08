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
  issued: {
    type: Boolean,
    default: false,
    required: true,
  },
  issuedto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user1",
    default: null,
  },
  issuedate: {
    type: Date,
    default: null,
  },
  returndate: {
    type: Date,
    default: null,
  },
  penalty: {
    type: Number,
    default: null,
  },
});
module.exports = mongoose.model("book", Bookschema);
