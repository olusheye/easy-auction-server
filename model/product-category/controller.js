const Controller = require('../../lib/controller')
const productCategoryFacade = require('./facade')

class ProductCategoryController extends Controller {}

module.exports = new ProductCategoryController(productCategoryFacade)
