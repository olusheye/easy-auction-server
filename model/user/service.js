const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = require("./schema");

class UserService {
  constructor() {}
  authenticate(req, res, next) {
    let model = mongoose.model("user", userSchema);

    model
      .findOne(req.query)
      .exec()
      .then(doc => {
        if (doc == null) {
          res.status(400).json();
        } else {
          res.status(200).json({
            username: doc.username,
            token: "ey5667ydbsbyw87uysbcd",
          });
        }
      });
  }
}
module.exports = new UserService();
