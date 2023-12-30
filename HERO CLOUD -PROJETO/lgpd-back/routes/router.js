import express from "express";
let router = express.Router();

import userController from "./UserController.js";
import courseController from "./CourseController.js";
import teacherController from "./TeacherController.js";
import evaluation from "./EvaluationController.jss";

router.get("/", function (req, res){
    console.log("oi!");
    res.status(200).json({ message: "oi!" });
});

router.use("/", userController);
router.use("/", teacherController);
router.use("/", courseController);
router.use("/", evaluationController);

export default router;