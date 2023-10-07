exports.auth = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(authorization);
  if (!authorization) {
    return res.status(401).send({
      'Unauthorized': 'No token provided'
    });
  }

  // const token = authorization.split(" ")[1];

  next();
}