const router = require("express").Router();
const User = require("../controllers/user");
// const { upload } = require("../middleware/fileupload");
const { checkBody, checkValidUser, checkdate } = require("../middleware/user");
router.post("/create", [checkBody, checkValidUser], User.create);
router.get("/getuser/:id", User.read);
router.get("/update/:id", User.update);
router.get("/delete/:id", User.delete);
router.get("/returnbook", User.returnbook);
// router.post("/issuebook", User.issuebook);
// router.get("/readbook/:bookname", User.readbook);

module.exports = router;
