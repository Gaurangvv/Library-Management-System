const UserModel = require("../models/user");
// const Bookmodel = require("../models/book");
const Issuebook = require("../models/issuebook");

exports.issuebook = async (req, res) => {
  try {
    const Issue = await Issuebook.create(req.body);
    return res.status(201).json({
      message: "Book is issued to you ",
      success: 1,
      Issue,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
// exports.returnbook = async (req, res) => {
//   try {
//     const Issue = await UserModel.create(req.body);
//     return res.status(201).json({
//       message: "Book is issued to you ",
//       success: 1,
//       Issue,
//     });
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

exports.create = async (req, res) => {
  try {
    const createUser = await UserModel.create(req.body);
    return res.status(201).json({
      message: "User Added",
      success: 1,
      createUser,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.read = async (req, res) => {
  try {
    const getuser = await UserModel.findOne({ _id: req.params.id });
    // console.log(req.params.id);
    return res.status(200).json({
      message: "users found",
      success: 1,
      getuser,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updateuser = await UserModel.findOneAndUpdate({
      _id: req.params.id,
      name: "gvv19",
    });
    return res.status(200).json({
      message: "users found",
      success: 1,
      updateuser,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
exports.delete = async (req, res) => {
  try {
    const deleteuser = await UserModel.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json({
      message: "users found",
      success: 1,
      deleteuser,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
