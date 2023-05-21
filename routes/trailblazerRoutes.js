const express = require('express');
const trailblazerController = require('../controllers/trailblazerController');

const route = express.Router();

route.get('/:id', trailblazerController.createSession);

module.exports = route;
