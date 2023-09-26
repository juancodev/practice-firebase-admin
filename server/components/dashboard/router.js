const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
  const authorization = req.headers.authorization
  controller.userLogged(authorization.split(" ")[1])
    .then((user) => response.success(req, res, user, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});


module.exports = router;