const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = require("../product/schema");

class BidService {
  constructor() {}

  placeBid(req, res, next) {
    var body = req.body;
    if (!this.isValidAmount(body.currentBid)) {
      return res.status(400).json({
        message: "Invalid Bid- Enter a valid amount",
      });
    }
    var pr = this.getProductById(body.productId).then(doc => {
      if (this.isBidLessThanCurrentBid(doc, body.currentBid)) {
        return res.status(400).json({
          message:
            "Invalid Bid- Your Bid has to be more than the Initial or Current Bid",
        });
      }
      this.updateBid(body.currentBid, pr, 'userId1');
      return res.status(200).json(body);
    });
  }
  getProductById(id) {
    let product;
    let model = mongoose.model("product", productSchema);
    return model.findById(id).exec();
  }
  updateBid(currentBid, product, userId) {
    product.bidOwnerId = userId;
    product.currentBid = currentBid;

    let model = mongoose.model("product", productSchema);
    model
      .update(product)
      .exec()
      .then(doc => {});
  }
  isValidAmount(currentBid) {
    return currentBid != null && currentBid != 0;
  }
  isBidLessThanCurrentBid(product, currentBid) {
    return currentBid <= product.currentBid; //&& currentBid > product.PriceRangeMax
  }
}
module.exports = new BidService();
