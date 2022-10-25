const fareModel = require("../models/fare");

exports.getfares = (req, res, next) => {
  fareModel.findAll({
    attributes: ['id', 'zona', 'tarifa']
  }).then((fares) => {
    res.status(200).json(fares);
  });
};
