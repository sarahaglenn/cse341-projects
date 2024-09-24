const routes = require('express').Router();
const assign1Controller = require('../controllers/assign1');

routes.get("/", assign1Controller.sarahRoute);
routes.get("/andrew", assign1Controller.andrewRoute);
routes.get('/michael', assign1Controller.michaelRoute);

module.exports = routes;