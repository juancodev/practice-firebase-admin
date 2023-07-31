const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
  controller.getUsers(req.params)
    .then((user) => response.success(req, res, user, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

router.post('/', (req, res) => {
  controller.addUser(req.body)
    .then((user) => response.success(req, res, user, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

router.get('/', (req, res) => {
  controller.getUsers()
    .then((user) => response.success(req, res, user, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
})

module.exports = router;