import express from "express";
import {  } from "../controllers/prodect.js"
import { createOrder, deleteOrder, editOrder, getOrder, orderDetials } from "../controllers/order.js";
const router = express.Router();


router.post("/create-order",createOrder);
router.get("/get-order",getOrder);
router.get("/details-order/:id",orderDetials);
router.delete("/delete-order/:id",deleteOrder);
router.put("/edit-order/:id",editOrder);


export default router;