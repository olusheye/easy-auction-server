const controller = require("./controller");
const Router = require("express").Router;
const router = new Router();
var multer = require("multer");
const path=require("path");
var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/images");
  },
  filename: (req, file, callback) => {
    // console.log(file);
    var filetype = "";
    if (file.mimetype === "image/gif") {
      filetype = "gif";
    }
    if (file.mimetype === "image/png") {
      filetype = "png";
    }
    if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    callback(null, "image-" + Date.now() + "." + filetype);
  },
});

var upload = multer({ storage: storage });

router
  .route("/")
  .get((...args) => controller.find(...args))
  // .post((...args) => {
  //   controller.create(...args);
  // })
  .post(upload.single("image"), async (req, res, next) => {
   // const host = req.host;
    const filePath =req.protocol + "://" +  req.get('host') + "/" + "images/"+path.basename( req.file.path);

    const patchedObj = { ...req.body, imgUrl: filePath };
    console.log(filePath);
    req.body = patchedObj;
    //const { filename: image } = req.file;
    // await sharp(req.file.path)
    //   .resize(500)
    //   .jpeg({ quality: 50 })
    //   .toFile(path.resolve(req.file.destination, "resized", image));
    // fs.unlinkSync(req.file.path);

    controller.create(req, res, next);
  });
router
  .route("/:id")
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args));

module.exports = router;
