const express = require("express");
const router = express.Router();
const UsersDomain = require('../../domain/users.domain');

class UsersTotalItemsController {
    static async get(request, response) {
        const userDomain = new UsersDomain();
        userDomain.getNumberOfItems(request.params,response);
    }
}
router.get("/", UsersTotalItemsController.get);
module.exports = router;

