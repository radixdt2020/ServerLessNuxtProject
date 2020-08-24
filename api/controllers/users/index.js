const express = require('express');
const router = express.Router();

const usersGroceryController = require('./user-grocery.controller');
// const usersMobileController = require('./user-mobile.controller');
// const usersElectronicController = require('./user-electronic.controller');
const usersTotalItemsController = require('./user-total-items.controller');
// const usersBoatItemsController = require('./user-boat-items.controller');
// const usersLaptopItemsController = require('./user-boat-items.controller');


router.use("/users", usersGroceryController);
// router.use("/mobile", usersMobileController);
// router.use("/electronic", usersElectronicController);
router.use("/items", usersTotalItemsController);
// router.use("/boatItems", usersBoatItemsController);
// router.use("/laptopItems", usersLaptopItemsController);

module.exports = router;