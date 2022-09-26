module.exports = function (sequelize, DataTypes) {
  return sequelize.define('student', {
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'This field cannot be empty' },
        isAlpha: { msg: 'This field only contains charaters' }
      }
    },
    mid_name: {
      type: DataTypes.STRING(50),
      defaultValue: '',
      validate: {
        isAlpha: { msg: 'This field only contains charaters' }
      }
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'This field cannot be empty' },
        isAlpha: { msg: 'This field only contains charaters' }
      }
    },
    full_name: {
      type: DataTypes.VIRTUAL,
      get () {
        return [
          this.last_name,
          this.mid_name,
          this.first_name
        ].join(' ')
      }
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'This field cannot be empty' }
      },
      get () {
        const dob = new Date(this.getDataValue('dob'))
        return `${dob.getDate()}/${dob.getMonth()}/${dob.getFullYear()}`
      }
    },
    grade: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      validate: {
        isInt: { msg: 'This field only contains an integer' },
        min: {
          args: 1,
          msg: 'This field must be positive'
        },
        max: {
          args: 12,
          msg: 'This field must be smaller than 12'
        }
      }
    },
    class_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'This field cannot be empty' },
        isAlphanumeric: { msg: 'This field only contains charaters and digits' }
      }
    },
    class: {
      type: DataTypes.VIRTUAL,
      get () {
        return [this.grade.toString(), this.class_name].join(' ')
      }
    },
    current_address: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'This field cannot be empty' }
      }
    },
    math_mark: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isFloat: { msg: 'This field only contains floating-point number' },
        min: {
          args: -1,
          msg: 'This field must be greater or equal to zero'
        },
        max: {
          args: 10,
          msg: 'This field must be smaller or equal to 10'
        }
      }
    },
    literature_mark: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isFloat: { msg: 'This field only contains floating-point number' },
        min: {
          args: -10,
          msg: 'This field must be greater or equal to zero'
        },
        max: {
          args: 10,
          msg: 'This field must be smaller or equal to 10'
        }
      }
    },
    english_mark: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isFloat: { msg: 'This field only contains floating-point number' },
        min: {
          args: -1,
          msg: 'This field must be greater or equal to zero'
        },
        max: {
          args: 10,
          msg: 'This field must be smaller or equal to 10'
        }
      }
    },
    average_mark: {
      type: DataTypes.VIRTUAL,
      get () {
        const avr = (this.math_mark + this.literature_mark + this.english_mark) / 3
        return avr.toFixed(1)
      }
    },
    student_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    }
  },
  { timestamps: false },
  sequelize)
}
