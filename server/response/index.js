exports.success = (req, res, message, statusCode) => {
  res.status(statusCode).send({
    error: '',
    message: message || 'created successfully'
  })
};

exports.error = (req, res, message, statusCode, errorDetails) => {
  console.log('[Require Error]: ', errorDetails);

  res.status(statusCode).send({
    error: message || 'Internal Error',
    message: ''
  })
}