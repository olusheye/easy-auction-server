const Facade = require('../../lib/facade')
const productCategorySchema = require('./schema')

class ProductCategoryFacade extends Facade {}

module.exports = new ProductCategoryFacade('ProductCategory', productCategorySchema)
