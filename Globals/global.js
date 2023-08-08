const jwt = require("jsonwebtoken");

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

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
