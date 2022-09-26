module.exports = function (sequelize, Student, table) {
  return async function (req, res) {
    try {
      await sequelize.sync()
      const rawQueryResult = await Student.findAll({
        attributes: {
          order: [
            ['grade', 'ASC'],
            ['class_name', 'ASC'],
            ['first_name', 'ASC'],
            ['mid_name', 'ASC'],
            ['last_name', 'ASC']
          ]
        }
      })
      const displayedHeaders = [
        'full_name',
        'class',
        'dob',
        'current_address',
        'math_mark',
        'literature_mark',
        'english_mark',
        'average_mark'
      ]
      table(res, rawQueryResult, displayedHeaders, 'index')
    } catch (err) {
      console.error(err)
      res.status(500).json('Some errors have occurred')
    }
  }
}
