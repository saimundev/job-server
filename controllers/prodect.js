import ProdectModel from "../models/prodect.js";

//crate prodect
export const createdProdect = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });
  try {
    await ProdectModel.create({
      name,
    });

    res.status(200).json({ message: "Prodect Created Successfull" });
  } catch (error) {
    res.status(500).json({ message: "internal Server Error" });
  }
};

//get prodect
export const getProdect = async (req, res) => {
  try {
    const allProdect = await ProdectModel.find({});
    res.status(200).json(allProdect);
  } catch (error) {
    res.status(500).json({ message: "internal Server Error" });
  }
};

//get single prodect
export const getSingleProdect = async (req, res) => {
    const { id } = req.params;
    try {
      const prodect = await ProdectModel.findById({_id:id});
      res.status(200).json(prodect);
    } catch (error) {
      res.status(500).json({ message: "internal Server Error" });
    }
  };

//edit prodect
export const editProdect = async (req, res) => {
  const { id } = req.params;
  console.log(id,req.body)
  try {
    await ProdectModel.findByIdAndUpdate({ _id: id }, { $set: req.body });
    res.status(200).json({ message: "Update successfull" });
  } catch (error) {
    res.status(500).json({ message: "internal Server Error" });
  }
};

//delete prodect
export const deleteProdect = async (req, res) => {
  const { id } = req.params;
  try {
    await ProdectModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Delete successfull" });
  } catch (error) {
    res.status(500).json({ message: "internal Server Error" });
  }
};
