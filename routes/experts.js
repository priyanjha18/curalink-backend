const express=require("express")
const expertsController=require("../controller/expertsController")
const router = express.Router();

router.post("/experts",expertsController.findExpertsForUser);
module.exports = router;
