/* eslint-disable camelcase */
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
    get: function (req, res) {
      res.render('edit', {
        method: 'POST',
        endPoint: '/create',
        fields,
        errors: {}
      })
    },

    post: async function (req, res) {
      const request = req.body

      if (request.mid_name === '') {
        request.mid_name = null
      }

      if (request.math_mark) {
        request.math_mark = Number(request.math_mark)
      }
      if (request.literature_mark) {
        request.literature_mark = Number(request.literature_mark)
      }
      if (request.english_mark) {
        request.english_mark = Number(request.english_mark)
      }

      try {
        await Student.create(request)
        res.status(200).redirect('/')
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
          endPoint: '/create',
          target: '/',
          fields,
          errors
        })
      }
    }
  }
}
