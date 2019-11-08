const Controller = require('../../lib/controller')
const bidFacade = require('./facade')

class BidController extends Controller {}

module.exports = new BidController(bidFacade)
