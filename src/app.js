import express from 'express';
//import users from './dados/dados.js';
import users from './dados/dados.js';
const app = express();

//Tell express to read body as json
app.use(express.json())

//Function to filter by id
function getById(id) {
    return users.filter(user => user.id == id)
}

function getIdSelectedUser(id) {
    return users.findIndex(user => user.id == id)

}

app.post('/users',(req, res) => {
    users.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
});

app.get('/users', (req, res) => {
    //res.send('Subindo aplicacao node')
    res.status(200).send(users)
});

app.get('/users/:id', (req, res) => {
    res.json(getById(req.params.id))
});

app.delete('/users/:id', (req, res) => {
    let index = getIdSelectedUser(req.params.id)
    users.splice(index, 1)
    res.send(`Successfully deleted selection id ${req.params.id}`)
})

app.put('/users/:id', (req, res) => {
    let index = getIdSelectedUser(req.params.id)
    users[index].name = req.body.name
    users[index].email = req.body.email
    users[index].password = req.body.password
    res.json(users)
})


export default app;