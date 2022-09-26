module.exports = {
  emptyWarning: 'This field is required',
  alphaWarning: 'This field only contains letters',
  intWarning: 'This field only contains integers',
  datetimeWarning: 'This field only contains datetime',
  rangeWarning: (low, high) => `This field values from ${low} to ${high}`
}
