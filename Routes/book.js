const router = require("express").Router();
const Book = require("../controllers/book");
router.post("/create", Book.create);
router.get("/read", Book.read);
router.get("/update/:id/:bookname", Book.update);
router.get("/delete/:id", Book.delete);

module.exports = router;
