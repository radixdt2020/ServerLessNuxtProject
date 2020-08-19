const express = require("express");
const router = express.Router();
const UsersDomain = require('../../domain/users.domain');

class UsersBoatItemsController {
    static async get(request, response) {
        const userDomain = new UsersDomain();
        userDomain.getLaptopProducts(request.params,response);
    }
}
router.get("/", UsersBoatItemsController.get);
module.exports = router;

