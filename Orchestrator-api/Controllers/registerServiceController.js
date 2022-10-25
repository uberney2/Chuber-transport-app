const axios = require("axios");

exports.createInitialService = (req, res, next) => {
  const initialServiceInformation = {
    idCliente: req.body.idCliente,
    idZona: req.body.idZona,
  };

  axios
    .post("http://localhost:8080/services/add", initialServiceInformation)
      .then((resp) => {
        console.log(resp.data);
        res.status(200).send(resp.data);
      })
      .catch((err) => console.log(err));
};

exports.confirmService = (req, res, next) => {
  //agregar aca logica para consultar conductor

  const initialServiceInformation = {
    id: req.body.idService,
    idConductor: req.body.idConductor,
  };

  axios
    .put("http://localhost:8080/services/confirmservice", initialServiceInformation)
      .then((resp) => {
        console.log(resp.data);
        res.status(200).send(resp.data);
      })
      .catch((err) => console.log(err));
};