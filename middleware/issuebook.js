const Issuebook = require("../models/issuebook");

exports.issuebookmiddleware = async (req, res, next) => {
  try {
    const { issuedate, returndate, issuebook } = req.body;

    if (!issuedate || issuedate === null || issuedate === undefined)
      return res.status(500).send("Issue Date Required ");
    if (!returndate || returndate === null || returndate === undefined)
      return res.status(500).send("Return Date Required ");
    if (!issuebook || issuebook === null || issuebook === undefined)
      return res.status(500).send("Issue book  ID  Required ");
    if (issuedate !== Date.now())
      return res.status(500).send("issue date must be current date ");
    next();
  } catch (Err) {
    return res.status(500).send(Err.message);
  }
};
