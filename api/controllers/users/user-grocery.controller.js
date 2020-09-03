const express = require("express");
const router = express.Router();
const UsersDomain = require('../../domain/users.domain');

class UsersController {
    static async get(request, response) {
        const userDomain = new UsersDomain();
        userDomain.getGrocery(request.params,response);
    }

    static async post(request, response) {
        const userDomain = new UsersDomain();
        userDomain.addItem(request.body,response);
    }

    static async getById(request, response) {
        const userDomain = new UsersDomain();
        userDomain.getItemById(request.params.id,response);
    }

    static async put(request, response) {
        const userDomain = new UsersDomain();
        userDomain.editItem(request,response);
    }

    static async delete(request, response) {
        const userDomain = new UsersDomain();
        userDomain.deleteItem(request.params,response);
    }
}
router.get("/", UsersController.get);
router.post('/', UsersController.post);
router.get('/:id', UsersController.getById);
router.put('/', UsersController.put);
router.delete('/:id/:sk', UsersController.delete);

module.exports = router;

