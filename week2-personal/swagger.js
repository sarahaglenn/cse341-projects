const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Sarah Glenn Contacts API',
    description: 'Contacts API by Sarah Glenn for CSE 341'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);
