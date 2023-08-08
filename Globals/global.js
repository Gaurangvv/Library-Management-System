const jwt = require("jsonwebtoken");
const transporter = require("../utils/mailTransporter");
const tokenGenerator = (input) => {
  const token = jwt.sign(input, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

const tokenVerifier = (token) => {
  const decoded = jwt.verify(
    token.toString(),
    process.env.JWT_SECRET_KEY,
    (err, decoded) => {
      if (err) {
        return err;
      }
      return decoded;
    }
  );
  return decoded;
};
const mailSender = async (input) => {
  try {
    await transporter.sendMail(input, function (err,data) {
      if (err) {
        return err;
      } else {
        console.log(data);
        return data
      }
    });
  } catch (error) {
    return error;
  }
};
module.exports = {
  tokenGenerator,
  tokenVerifier,
  mailSender,
};
