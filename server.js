const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {

    const secretKey = process.env.BANK_SECRET_KEY;

    res.send('Hello, this is my secret: ', secretKey)
});

app.listen(PORT, () => {
    console.log('App is up & running & listening')
})