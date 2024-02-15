import express from "express";
import ListController from "../controller/listController.js";

const router = express.Router();

router.get("/lists", ListController.getLists);
router.get("/lists/:id", ListController.getListById);
router.post("/lists", ListController.createList);
router.put("/lists/:id", ListController.updateList);
router.delete("/lists/:id", ListController.deleteList);

export default router;
