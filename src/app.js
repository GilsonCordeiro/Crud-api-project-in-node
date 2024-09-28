import express from 'express';
//import users from './dados/dados.js';
import users from './dados/dados.js';
const app = express();

//Tell express to read body as json
app.use(express.json())

app.get('/users', (req, res) => {
    //res.send('Subindo aplicacao node')
    res.status(200).send(users)
});

app.post('/users',(req, res) => {
    users.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params; 
    if(Number(id) > users.length) {
        res.send("Invalid id!");
    }
    
    const user = users.find(user => user.id == Number(id));
    res.status(200).send(user)
});

export default app;