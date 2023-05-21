const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createSession = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  res.status(200).json({
    status: 'success',
    message: `The ID is ${id}`,
  });
});
