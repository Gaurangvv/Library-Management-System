const UserModel = require("../models/user");
const Bookmodel = require("../models/book");
const { differenceInDays } = require("date-fns");

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

exports.returnbook = async (req, res) => {
  // try {
  //   const { bookId, userId } = req.body;

  //   const book = await Bookmodel.findById({ _id: bookId });
  //   if (!book) {
  //     return res.status(404).json({ error: "Book not found" });
  //   }

  //   if (book.issued === true) {
  //     return res.status(400).json({ error: "Book is already issued" });
  //   }

  //   const user = await Usermodel.findById({ _id: userId });
  //   if (!user) {
  //     return res.status(404).json({ error: "User not found" });
  //   }

  //   book.issued = true;
  //   book.issuedto = userId;
  //   book.issuedate = Date.now();
  //   book.returndate = returndate;

  //   await book.save();

  //   return res.status(200).json({ message: "Book issued successfully" });
  // } catch (error) {
  //   return res.status(500).json({ error: "An error occurred" });
  // }
  try {
    const { bookId } = req.body;

    const book = await Bookmodel.findById({ _id: bookId });
    // const user = await UserModel.findById({_id :});
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    if (book.issued === false) {
      return res.status(400).json({ error: "Book is already not issued" });
    }

    const currentDate = new Date();
    console.log(currentDate.toISOString());
    console.log(book.returndate);
    const daysLate = differenceInDays(currentDate, book.returndate);
    console.log(daysLate);

    if (daysLate > 0) {
      const penaltyPerDay = 5; // Admin-defined penalty per day
      const totalPenalty = daysLate * penaltyPerDay;

      book.penalty = totalPenalty;
      await book.save();
    }

    book.issued = false;
    book.issuedto = null;
    book.issuedate = null;
    book.returndate = null;
    await book.save();

    return res
      .status(200)
      .json({ message: "Book returned successfully", penalty: book.penalty });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred" });
  }
};

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
