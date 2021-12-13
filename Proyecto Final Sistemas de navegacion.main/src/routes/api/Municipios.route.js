'use strict';

const express = require('express');
const router = express.Router();
const Municipios = require('../../controllers/Municipios.controller');

router.get('/', Municipios.GetMunicipios);

router.get('/id', Municipios.GetMunicipioById);

router.post('/crear', Municipios.InsertMunicipio);

router.put('/actualizar', Municipios.UpdateMunicipio);

module.exports = router;
