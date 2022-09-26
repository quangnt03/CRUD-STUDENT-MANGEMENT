const fields = {
  first_name: { inputType: 'text' },
  mid_name: { inputType: 'text' },
  last_name: { inputType: 'text' },
  dob: { inputType: 'date' },
  grade: { inputType: 'number' },
  class_name: { inputType: 'text' },
  current_address: { inputType: 'text' },
  math_mark: { inputType: 'text' },
  literature_mark: { inputType: 'text' },
  english_mark: { inputType: 'text' }
}

module.exports = function (Student) {
  return {
    get: async function (req, res) {
      const { id } = req.params
      const queryResult = await Student.findByPk(id)
      const student = queryResult.dataValues
      for (const prop in fields) {
        fields[prop].value = student[prop]
      }
      res.render('edit', {
        method: 'POST',
        endPoint: '/update/' + id,
        target: '/profile/' + id,
        fields,
        errors: {}
      })
    },

    put: async function (req, res) {
      const { id } = req.params
      const request = req.body
      try {
        const currentStudent = await Student.findByPk(id)

        await currentStudent.update(request)
        await currentStudent.save()
        console.log(request)
        res.status(200).redirect(`/profile/${id}`)
      } catch (errs) {
        const errors = {}
        errs.errors.forEach(err => {
          if (!(Object.hasOwn(errors, err.path))) {
            errors[err.path] = err.message
          }
        })

        for (const inputProp in request) {
          fields[inputProp].value = request[inputProp]
        }
        res.render('edit', {
          method: 'POST',
          endPoint: '/update/' + id,
          target: '/profile/' + id,
          fields,
          errors
        })
      }
    }
  }
}
