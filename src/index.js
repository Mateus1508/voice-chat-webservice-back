
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

dotenv.config();

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.json());
server.use('/api',routes);

const PORT = process.env.PORT;

server.get('/', (req, res) => {
    return res.status(200).json({message: 'Welcome to the webservice!'})
});


server.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
})