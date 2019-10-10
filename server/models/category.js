const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  item: { type: Schema.ObjectId, ref: "Item" }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
