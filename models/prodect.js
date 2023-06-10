import mongoose from "mongoose";

const prodectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const ProdectModel = mongoose.model("prodect", prodectSchema);

export default ProdectModel;
