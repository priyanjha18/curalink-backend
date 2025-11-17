const express=require("express")
const publicationController=require("../controller/publication controller")
const router = express.Router();

router.get("/publications",publicationController.getPublications);
module.exports = router;
