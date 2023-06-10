import OrderModel from "../models/order.js";

export const createOrder = async (req, res) => {
  const { name, email, prodectValue } = req.body;
  if (!name || !email || !prodectValue)
    return res.status(400).json({ message: "All field are required" });
  try {
    await OrderModel.create({
      name,
      email,
      order: prodectValue,
    });

    res.status(200).json({ message: "Order has been created" });
  } catch (error) {
    res.status(500).json({ message: "internal Server Error" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await OrderModel.find({});
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "internal Server Error" });
  }
};

export const orderDetials = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderModel.findById({ _id: id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "internal Server Error" });
  }
};

export const editOrder = async (req, res) => {
  const { id } = req.params;
  const { name, email, prodectValue } = req.body;
  if (!name || !email)
    return res.status(400).json({ message: "All field are required" });
  try {
    await OrderModel.findByIdAndUpdate(
      { _id: id },
      { name, email, order: prodectValue }
    );
    res.status(200).json({ message: "Update successfull Successfull" });
  } catch (error) {
    res.status(500).json({ message: "internal Server Error" });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await OrderModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: "internal Server Error" });
  }
};
