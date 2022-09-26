const { Op } = require('sequelize')
const { sequelize, Student } = require('../models')
const table = require('../utils/renderer')

const Home = require('./home.controller')(sequelize, Student, table)
const Search = require('./search.controller')(Op, Student, table)

const Profile = require('./profile.controller')(Student, table)
const Create = require('./create.controller')(Student)
const Update = require('./update.controller')(Student)
const Remove = require('./remove.controller')(Student)

module.exports = {
  Home,
  Profile,
  Search,
  Create,
  Update,
  Remove
}
