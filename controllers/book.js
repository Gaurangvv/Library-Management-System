const BookModel = require("../models/book");

exports.create = async (req, res) => {
  try {
    const createbook = await BookModel.create(req.body);
    return res.status(200).json({
      message: "Book Added",
      success: 1,
      bookdetails: createbook,
    });
  } catch (err) {
    return res.send(err.message);
  }
};

exports.read = async (req, res) => {
  try {
    const readbook = await BookModel.find({});
    return res.status(200).json({
      message: "Books Found ",
      success: 1,
      bookdetails: readbook,
    });
  } catch (err) {
    return res.send(err.message);
  }
};
exports.update = async (req, res) => {
  try {
    const updatebook = await BookModel.findOneAndUpdate({
      _id: req.params.id,
      bookname: req.params.bookname,
    });
    return res.status(200).json({
      message: "Book updated",
      success: 1,
      bookdetails: updatebook,
    });
  } catch (err) {
    return res.send(err.message);
  }
};
exports.delete = async (req, res) => {
  try {
    const deletebook = await BookModel.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json({
      message: "Book Deleted",
      success: 1,
      bookdetails: deletebook,
    });
  } catch (err) {
    return res.send(err.message);
  }
};
