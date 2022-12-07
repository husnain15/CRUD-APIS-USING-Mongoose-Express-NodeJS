import express from "express";
import {
  addUserHandler,
  getAllUserHandler,
  getfindByIdUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from "../Controller/UserController.js";

const router = express.Router();

router.get("/", getAllUserHandler);
router.post("/add", addUserHandler);
router.get("/:userId", getfindByIdUserHandler);
router.put("/update/:userId", updateUserHandler);
router.delete("/delete/:userId", deleteUserHandler);

export default router;
