const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_CRED
  }
});

module.exports = transporter


