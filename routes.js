const Router = require('express').Router
const router = new Router()

const user = require('./model/user/router')
const product = require('./model/product/router')
const productCategory = require('./model/product-category/router')
const bid = require('./model/bid/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to easy-auction-server API!' })
})

router.use('/users', user)
router.use('/product', product)
router.use('/product-category', productCategory)
router.use('/bid', bid)

module.exports = router
