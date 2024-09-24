const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 3000;