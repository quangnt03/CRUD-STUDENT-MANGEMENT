const { Sequelize, DataTypes } = require('sequelize')

const config = require('../config/db.config')
const model = require('./student.model')

const sequelize = new Sequelize(
  config.DB, config.USER, config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect
  }
)

module.exports = {
  sequelize,
  Student: model(sequelize, DataTypes)
}
