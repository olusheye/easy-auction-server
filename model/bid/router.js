const controller = require("./controller");
const Router = require("express").Router;
const router = new Router();
const bidService = require("./service");
router
  .route("/")
  .get((...args) => controller.find(...args))
  .post((...args) => bidService.placeBid(...args));
router
  .route("/:id")
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args));

module.exports = router;
