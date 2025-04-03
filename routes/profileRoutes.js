import express from "express";
import { getProfiles, addProfile, updateProfile, deleteProfile } from "../controllers/profileController.js";

const router = express.Router();

router.get("/", getProfiles);
router.post("/", addProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;
