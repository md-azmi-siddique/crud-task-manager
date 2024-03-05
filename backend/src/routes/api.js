const express = require("express")
const router = express.Router()

const TaskController = require("../controllers/TaskController")


router.get("/", TaskController.welcome)



module.exports=router;