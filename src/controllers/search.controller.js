module.exports = function (Op, Student, table) {
  return async function (req, res) {
    const qWord = req.query.q.toLowerCase()
    try {
      const queryResult = await Student.findAll({
        where: {
          [Op.or]: {
            first_name: { [Op.iLike]: `%${qWord}%` },
            mid_name: { [Op.iLike]: `%${qWord}%` },
            last_name: { [Op.iLike]: `%${qWord}%` }
          }
        },
        logging: console.log
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
      table(res, queryResult, displayedHeaders, 'index')
    } catch (err) {
      console.error(err)
      res.status(404).json('Unexpected error')
    }
  }
}
