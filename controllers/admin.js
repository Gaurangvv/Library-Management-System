const AdminModel = require("../models/admin");
const Bookmodel = require("../models/book");
const Usermodel = require("../models/user");
const { tokenGenerator } = require("../Globals/global");

// controllers/bookController.js
exports.issueBook = async (req, res) => {
  try {
    const { bookId, userId, returndate } = req.body;

    const book = await Bookmodel.findById({ _id: bookId });
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    if (book.issued === true) {
      return res.status(400).json({ error: "Book is already issued" });
    }

    const user = await Usermodel.findById({ _id: userId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    book.issued = true;
    book.issuedto = userId;
    book.issuedate = "2023-08-01T00:00:00.000Z";
    book.returndate = returndate;

    await book.save();

    return res.status(200).json({ message: "Book issued successfully" });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred" });
  }
};

// exports.returnbook = async (req, res) => {
//   try {
//     const { bookId, userId, returndate } = req.body;

//     const book = await Bookmodel.findById({ _id: bookId });
//     if (!book) {
//       return res.status(404).json({ error: "Book not found" });
//     }

//     if (book.issued === true) {
//       return res.status(400).json({ error: "Book is already issued" });
//     }

//     const user = await Usermodel.findById({ _id: userId });
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     book.issued = true;
//     book.issuedto = userId;
//     book.issuedate = Date.now();
//     book.returndate = returndate;

//     await book.save();

//     return res.status(200).json({ message: "Book issued successfully" });
//   } catch (error) {
//     return res.status(500).json({ error: "An error occurred" });
//   }
// };

// Check if the book exists in the librar

// exports.uploadbook = async (req, res) => {
//   try {
//     if (req.file) {
//       const fileDataAsString = req.file.buffer.toString(); // Convert buffer to string
//       console.log("File Data:", fileDataAsString);
//     } else if(req.files){
//       req.files.forEach((file, index) => {
//         const filedataasString = file.buffer.toString(); //converting data to String
//         console.log(
//           `file Data  ${index + 1} Data =>>` + filedataasString.green
//         ); //printing converted String data in console

//       });
//     }else{
//         return res.status(400).send("Please select a file You want to Upload");
//     }

//     // Storing File that is being Uploaded from the user
//     fs.writeFileSync(`${path}` + req.files[0].originalname,req.files[0].buffer);
//     return res.status(200).send("files Uploaded Successfully");

//   } catch (error) {
//     return res.status(500).send("File Upload error");
//   }
// };
exports.login = async (req, res) => {
  try {
    const { username, email } = req.body;
    let user = await AdminModel.findOne({ username });
    if (user.email !== email) {
      return res.status(400).send("Invalid Email !");
    }
    const payload = {
      userId: user._id,
      username: username,
      role: "admin",
    };
    let token = tokenGenerator(payload);
    return res
      .status(200)
      .json({ message: "User authenticated successfully", token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.create = async (req, res) => {
  try {
    const createAdmin = await AdminModel.create(req.body);
    return res.status(201).json({
      message: "Admin Added",
      success: 1,
      CreatedAdmin: createAdmin,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.read = async (req, res) => {
  try {
    const getadmin = await AdminModel.find({});
    return res.status(200).json({
      message: "Admin found",
      success: 1,
      Admins: getadmin,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const updateadmin = await AdminModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      updateDetails,
      { new: true }
    );
    return res.status(200).json({
      message: "Admin updated",
      success: 1,
      updateadmin,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
exports.delete = async (req, res) => {
  try {
    const deleteadmin = await AdminModel.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json({
      message: "Admin deleted",
      success: 1,
      deleteadmin,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
