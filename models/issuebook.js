const mongoose = require("mongoose");

const Issuedbookschema = new mongoose.Schema({
  issuebook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
    required: true,
  },
  issuedate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  returndate: {
    type: Date,
    required: true,
  },
  Issuedto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("issuedbook", Issuedbookschema);
