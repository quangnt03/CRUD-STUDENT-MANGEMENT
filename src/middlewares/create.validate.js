const warning = require('./warning')

module.exports = function (body) {
  return [
    body('first_name')
      .notEmpty().withMessage(warning.emptyWarning),

    body('mid_name')
      .isAlpha().withMessage(warning.alphaWarning),

    body('last_name')
      .notEmpty().withMessage(warning.emptyWarning)
      .isAlpha().withMessage(warning.alphaWarning),

    body('dob')
      .notEmpty().withMessage(warning.emptyWarning)
      .isDate().withMessage(warning.datetimeWarning),

    body('grade')
      .notEmpty().withMessage(warning.emptyWarning)
      .isInt({ gt: 1, lt: 13 })
      .withMessage(warning.rangeWarning(1, 12))
      .toInt(),

    body('class_name')
      .notEmpty().withMessage(warning.emptyWarning),

    body('current_address')
      .notEmpty().withMessage(warning.emptyWarning),

    body('math_mark')
      .isFloat({ gt: 0, lt: 10 }).withMessage(warning.rangeWarning(1, 10))
      .toFloat(),

    body('literature_mark')
      .isFloat({ gt: 0, lt: 10 }).withMessage(warning.rangeWarning(1, 10))
      .toFloat(),

    body('english_mark').isFloat({ gt: 0, lt: 10 })
      .isFloat({ gt: 0, lt: 10 }).withMessage(warning.rangeWarning(1, 10))
      .toFloat()
  ]
}
