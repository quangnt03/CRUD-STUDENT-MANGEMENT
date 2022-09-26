module.exports = function (Student) {
  return async function (req, res) {
    const { id } = req.params
    try {
      await Student.destroy({ where: { student_id: id } })
      res.redirect('/')
    } catch (errors) {
      res.status(500).json(errors.array())
    }
  }
}
