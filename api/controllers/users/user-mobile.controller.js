const express = require("express");
const router = express.Router();
const UsersDomain = require('../../domain/users.domain');

class UsersMobileController {
    static async get(request, response) {
        const userDomain = new UsersDomain();
        userDomain.getMobile(request.params,response);
    }
}
router.get("/", UsersMobileController.get);
module.exports = router;

