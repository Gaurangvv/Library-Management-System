const AuthorModel = require("../models/author");

exports.create = async (req, res) => {
  try {
    const createauthor = await AuthorModel.create(req.body);
    return res.status(201).json({
      message: "Author Added",
      success: 1,
      createauthor,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.read = async (req, res) => {
  try {
    const getauthor = await AuthorModel.find({});
    return res.status(200).json({
      message: "Author found",
      success: 1,
      getauthor,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updateauthor = await AuthorModel.findOneAndUpdate({
      _id: req.params.id,
      authorname: req.params.authorname,
    });
    return res.status(200).json({
      message: "Author updated",
      success: 1,
      updateauthor,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
exports.delete = async (req, res) => {
  try {
    const deleteauthor = await AuthorModel.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json({
      message: "Author deleted",
      success: 1,
      deleteauthor,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
