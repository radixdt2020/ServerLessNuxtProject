const express = require("express");
const router = express.Router();
const UsersDomain = require('../../domain/users.domain');

class UsersController {
    static async get(request, response) {
        const userDomain = new UsersDomain();
        userDomain.getElectronic(request.params,response);
    }
}
router.get("/", UsersController.get);
module.exports = router;

