const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "MINIMUM 3 CHARS REQUIRED"],
    maxlength: [20, "MAXIMUM LENGTH 20 CHARS"],
    required: true,
  },
  email: {
    type: String,
    minlength: [3, "MINIMUM 3 CHARS REQUIRED"],
    maxlength: [20, "MAXIMUM LENGTH 20 CHARS"],
    required: true,
  },
  contactno: {
    type: Number,
    minlength: 10,
    maxlength: 15,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  //   address: {
  //     houseno: {
  //       type: String,
  //       minlength: 2,
  //       maxlength: 10,
  //       required: true,
  //     },
  //     societyname: {
  //       type: String,
  //       minlength: 5,
  //       maxlength: 15,
  //       required: true,
  //     },

  //     landmark: {
  //       type: String,
  //       minlength: 5,
  //       maxlength: 15,
  //       required: true,
  //     },
  //     City: {
  //       type: String,
  //       minlength: 5,
  //       maxlength: 15,
  //       required: true,
  //     },
  //     pincode: {
  //       type: Number,
  //       minlength: 5,
  //       maxlength: 15,
  //       required: true,
  //     },
  //   },
});

module.exports = mongoose.model("user1", Userschema);
