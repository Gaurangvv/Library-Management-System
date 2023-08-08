const Bookmodel = require("../models/book");


exports.checkbookname = async (req, res, next) => {
  try {
    if (!req.body) return res.status(400).send("Request body is required");
    if (
      req.body.bookname === "" ||
      req.body.bookname === null ||
      (req.body.bookname === undefined && !req.body.bookauthor) ||
      req.body.bookauthor === "" ||
      req.body.bookauthor === null
    )
      return res.status(400).send("Name And Email is required");

    req.body.bookname = req.body.bookname.toString().toUpperCase();
    req.body.bookauthor = req.body.bookauthor.toString().toUpperCase();
    next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.checkbookquantity = async (req, res, next) => {
  try {
    if (!req.body) return res.status(400).send("Request body is required");
    if (
      req.body.bookquantity === "" ||
      req.body.bookquantity === null ||
      (req.body.bookname === undefined && !req.body.bookauthor) ||
      req.body.bookauthor === "" ||
      req.body.bookauthor === null
    )
      return res.status(400).send("Name And Email is required");
    if (!req.body.email.includes("@"))
      return res.status(400).send("Enter a valid email");

    req.body.bookquantity = req.body.bookname.parseInt().toUpperCase();
    next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
