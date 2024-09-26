
import express from 'express';
const app = express();
const PORT = 3000; 
import users from './dados/dados.js';

app.get('/users', (req, res) => {
    //res.send('Subindo aplicacao node')
    res.status(200).send(users)
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params; 
    if(Number(id) > users.length) {
        res.send("Invalid id!");
    }
    
    const user = users.find(user => user.id == Number(id));
    res.status(200).send(user)
});


app.listen(PORT, () => {
    console.log(`Server running at address http://localhost:${PORT}`);
    
});
