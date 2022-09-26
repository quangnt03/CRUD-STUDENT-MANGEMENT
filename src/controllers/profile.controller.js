module.exports = function (Student) {
  return async function (req, res) {
    const { id } = req.params
    try {
      const queryResult = await Student.findByPk(id)
      const headers = queryResult._options.attributes.filter(
        header => {
          const excludeHeaders = [
            'student_id',
            'first_name',
            'mid_name',
            'last_name',
            'class_name'
          ]
          return excludeHeaders.indexOf(header) === -1
        }
      )
      res.render('profile', {
        studentId: id,
        headers,
        student: queryResult
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
