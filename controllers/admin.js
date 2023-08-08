const AdminModel = require("../models/admin");
const Bookmodel = require("../models/book");
const Usermodel = require("../models/user")
const { tokenGenerator } = require("../Globals/global");

exports.Issuebook = async (req, res) => {
  const { bookId, userId } = req.body;

  // Check if the book exists in the library
 const book = await  Bookmodel.findOne({ _id:B }, (err, book) => {
    if (err) {
      console.error("Error finding the book:", err);
      res.status(500).json({ error: "Failed to find the book" });
    } else if (!book) {
      res.status(404).json({ error: "Book not found" });
    } else if (book.quantity <= 0) {
      res.status(400).json({ error: "Book is not available" });
    } else {
      // Update the book quantity and mark it as issued to the user
      collection.updateOne(
        { _id: Bookmodel.ObjectId(bookId) },
        {
          Bookmodel : { availablebooks -1 },
          Issuedto: { Issuedto: mongodb.ObjectId(userId) },
        },
        (err) => {
          if (err) {
            console.error("Error issuing the book:", err);
            res.status(500).json({ error: "Failed to issue the book" });
          } else {
            console.log("Book issued:", book);
            res.status(200).json({ message: "Book issued successfully" });
          }
        }
      );
    }
  });
};

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
