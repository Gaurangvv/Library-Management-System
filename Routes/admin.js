const router = require("express").Router();
const Admin = require("../controllers/admin");
const User = require("../controllers/user");
const { authenticateToken } = require("../middleware/auth");

router.post("/adduserviaadmin", User.create);
router.post("/create", Admin.create);
router.post("/login", Admin.login);
router.get("/getadmin", [authenticateToken], Admin.read);
router.get("/updateadmin/:id", Admin.update);
router.get("/deleteadmin/:id", Admin.delete);
router.post("/issuebook");

module.exports = router;
