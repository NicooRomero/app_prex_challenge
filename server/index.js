const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5002;

// middlewares
app.use(express.json({ extended: true }));
app.use(cors());

// access control config
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Ruta para consultar información por IP
app.get('/getServerInfoByIp', async (req, res) => {
    const { ip } = req.query;

    if (!ip) {
        return res.status(400).send({ message: 'Por favor ingresa una dirección IP' });
    }

    try {
        const response = await axios.get(`http://${ip}:5001/api/v1/getInfo`)

        return res.status(200).send(response.data.data);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: 'Invalid ip address.'});
    }

});

app.listen(PORT, () => {
    console.log(`### Server is run in port ${PORT} ###`)
});