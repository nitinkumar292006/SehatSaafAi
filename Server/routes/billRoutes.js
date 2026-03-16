import express from "express";
import multer from "multer";
import { analyzeBill } from "../controller/billController.js";

const router = express.Router();

const upload = multer({dest:"uploads/"});

router.post("/analyze",upload.single("bill"),analyzeBill);

export default router;