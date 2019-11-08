const Facade = require('../../lib/facade')
const bidSchema = require('./schema')

class BidFacade extends Facade {}

module.exports = new BidFacade('Bid', bidSchema)
