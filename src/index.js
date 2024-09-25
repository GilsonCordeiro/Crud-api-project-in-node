const express = require('express');

const app = express();

app.get('/', (req, res) => {
    //res.send('Subindo aplicacao node')
    res.status(200).send('Rodando aplicacoa node')
});

app.listen(3000, () => {
    console.log('Running Serve');
    
});
