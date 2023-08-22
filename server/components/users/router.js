const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
  if (req.query.email) {
    controller.getUsers(req.query.email)
      .then((user) => response.success(req, res, user, 200))
      .catch((error) => response.error(req, res, 'Internal Error', 500, error));
  } else {
    controller.getUsers()
      .then((user) => response.success(req, res, user, 200))
      .catch((error) => response.error(req, res, 'Internal Error', 500, error));
  }
});

router.post('/', (req, res) => {
  controller.addUser(req.body)
    .then((user) => response.success(req, res, user, 201)) // esta línea es para guardar en Auth
    .then(() => controller.saveUser(req.body) // esta línea es para guardar en Firestore
      .then(() => console.log('successfully')))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

module.exports = router;