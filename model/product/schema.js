const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: { type: String, required: true },
  description: { type: String },
  imgUrl: { type: String },
  priceRangeMin: { type: String },
  priceRangeMax: { type: String },
  bidStartTime: { type: Date },
  bidEndTime: { type: Date },
  currentBid: { type: Number, default: 0 },
  userId: { type: String },
});

module.exports = productSchema;
