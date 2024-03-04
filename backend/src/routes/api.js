const express = require("express");
const router = express.Router();

const WelcomeController = require("../controllers/WelcomeController");
const {Hello1} = require("../controllers/HelloController");
// const HelloController = require("../controllers/HelloController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");


router.get("/",AuthMiddleware, WelcomeController.welcome)
router.get("/welcome1",AuthMiddleware, WelcomeController.welcome1)
router.get("/welcome2", WelcomeController.welcome2)

//from record
router.get("/hello1-get", Hello1)

router.post("/hello1-post", Hello1)

module.exports=router;