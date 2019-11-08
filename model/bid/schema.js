const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema({
  currentBid: { type: Number, required: true },
  productId: { type: String, required: true },
  bidOwnerId: { type: Number, required: true },
});

module.exports = bidSchema;
