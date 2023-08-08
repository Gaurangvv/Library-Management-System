const router = require("express").Router();
const Author = require("../controllers/author");
const { checkAuthor, validateAuthor } = require("../middleware/author");
router.post("/create", [ validateAuthor], Author.create);
router.get("/getauthor", Author.read);
router.get("/updateauthor/:id/:authorname", Author.update);
router.get("/deleteauthor/:id", Author.delete);

module.exports = router;
