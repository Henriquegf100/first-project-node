const express = require('express')
const uuid = require('uuid')

const port = 3000
const app = express()
app.use(express.json())
/*
- Query params => meusite.com/user?name=henrique&age=34 // FILTROS
- Route params => /users/2    //BUSCAR,DELETAR OU ATUALIZAR ALGO ESPECÍFICO
- Request Body => { "name":"Henrique","age":}

-GET   => Buscar informação no back-end
-Post  => Criar informação no back-end
-PUT / PATCH  => Alterar/Atualizar informação no back-end
-DELETE  => Deletar informação no back-end

*/
const users = []

const myFirstMiddleware = (request, response, next) =>{
    console.log("Fui chamdo")

    next()
    console.log("Finalizamos")
}

app.use(myFirstMiddleware)

app.get('/users', (request, response) => {
    console.log("A rota foi chamada")
    return response.json({users})
})

app.post('/users', (request, response) => {
const {name, age} = request.body

const user = { id: uuid.v4(), name, age }

users.push(user)
    return response.status(201).json(user)
})

app.put('/users/:id', (request, response) => {
const { id } = request.params
const { name, age } = request.body

const updateUser = { id, name, age }


const index = users.findIndex(user => user.id === id)

if(index < 0){
    return response.status(404).json({ message: "User not found"})
}

users[index] = updateUser


    return response.json({updateUser})
})

app.delete('/users/:id', (request,response) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id)
    if(index <0){
        return response.status(404).json({ message: "User not found"})
    }
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})