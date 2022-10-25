const servicesModel = require("../models/services");

exports.showService = (req, res, next) => {
  res
    .status(200)
    .json({ message: "Fetched posts successfully.", posts: "posts" });
};

exports.addService = (req, res, next) => {
  
  const idCliente = req.body.idCliente;
  const idZona = req.body.idZona;
  const idDescuento = req.body.idDescuento;
  const idEstado = req.body.idEstado;
  const precioFinal = req.body.precioFinal;

  servicesModel
    .create({
      idCliente: idCliente,
      idZona: idZona,
      idDescuento: idDescuento,
      idEstado: 1,
      precioFinal: 10,
    })
    .then((resp) => {
      res
        .status(200)
        .json({ message: "Fetched posts successfully.", posts: resp });
    });
};

exports.confirmService = (req, res, next) => {
  const idService = req.body.id;
  const idConductor = req.body.idConductor;
  servicesModel
    .update({
      idConductor: idConductor,
      idEstado: 2,
    },
    {
      where: {
        id: idService,
      }
    })
    .then((resp) => {
      res.status(200).json({ message: "Update succesfully", posts: resp });
    });
};

exports.cancelService = (req, res, next) => {
  const idService = req.body.id;
  servicesModel
    .upsert({
      id: idService,
      idEstado: 3,
    })
    .then((resp) => {
      res.status(200).json({ message: "Update succesfully", posts: resp });
    });
};

exports.finishService = (req, res, next) => {
  const idService = req.body.id;
  servicesModel
    .upsert({
      id: idService,
      idEstado: 4,
    })
    .then((resp) => {
      res.status(200).json({ message: "Update succesfully", posts: resp });
    });
};
