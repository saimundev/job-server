import express from "express";
import { createdProdect, deleteProdect, editProdect, getProdect, getSingleProdect } from "../controllers/prodect.js"
const router = express.Router();


router.post("/create-prodect",createdProdect);
router.get("/get-prodect",getProdect);
router.get("/single-prodect/:id",getSingleProdect);
router.put("/edit-prodect/:id",editProdect);
router.delete("/delete-prodect/:id",deleteProdect);

export default router;