const express = require("express");
const router = express.Router();

const trialController=require("../controller/trialController")

router.get("/trials",trialController.getTrials)


module.exports = router;