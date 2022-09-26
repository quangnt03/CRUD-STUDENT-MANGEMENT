function toTitleCase (str) {
  const words = str.split('_')
  return words.map(sub => sub[0].toUpperCase() + sub.slice(1))
    .join(' ')
}

module.exports = function (res, studentsList, props, template) {
  const studentDisplayInfo = studentsList.map(student => {
    const studentDisplayInfo = {}
    for (const prop of props) {
      studentDisplayInfo[prop] = student[prop]
    }
    studentDisplayInfo.student_id = student.student_id
    return studentDisplayInfo
  })

  res.render(template, {
    props: props.map(prop => toTitleCase(prop)),
    students: studentDisplayInfo
  })
}
