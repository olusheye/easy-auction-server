const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productCategorySchema = new Schema({
  productCategoryName: { type: String, required: true },
  description: { type: String }
})

module.exports = productCategorySchema
