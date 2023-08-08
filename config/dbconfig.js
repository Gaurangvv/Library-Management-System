const mongoose = require("mongoose");
require("dotenv").config();
exports.dbConnection = async () => {
  try {
    const connectDb = await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database Connected");
      })
      .catch((err) => {
        console.error(err + "");
      });
  } catch (error) {
    console.error(error + "");
  }
};
