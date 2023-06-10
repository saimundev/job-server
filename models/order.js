import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  order:{
    type:Array,
    default:[]
  }
});

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;
