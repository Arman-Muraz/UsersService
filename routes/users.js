let express = require('express');
let router = express.Router();
const UserController = require("../controllers/user.controller")

/* GET users listing. */
router.get('/', UserController.getAll)

router.post('/',UserController.create)

router.get('/:id', UserController.getOne)

router.put('/:id', UserController.update)

router.delete('/:id', UserController.remove)

module.exports = router;
