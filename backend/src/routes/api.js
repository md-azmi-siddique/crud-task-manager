const express = require("express")
const router = express.Router()

const TaskController = require("../controllers/TaskController")


router.get("/", TaskController.homeTest)
router.get("/tasks", TaskController.tasks)
router.post("/tasksPost", TaskController.tasksPost)
router.delete("/tasksDelete/:id", TaskController.tasksDelete)
router.put("/tasksUpdate/:id", TaskController.tasksUpdate)


module.exports=router;