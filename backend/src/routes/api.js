const express = require("express")
const router = express.Router()

const TaskController = require("../controllers/TaskController")


router.get("/", TaskController.homeTest)
router.get("/tasks", TaskController.tasks)
router.get("/welcome2", TaskController.welcome2)


module.exports=router;