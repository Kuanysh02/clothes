const express = require('express')
const controller = require('../controllers/ProductController')
const router = express.Router();

router.get('/', controller.findAll);
router.post('/', controller.create);


router
    .route("/")
    .get((req, res) => res.render("shop.ejs"))

module.exports = router;