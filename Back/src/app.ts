// src/app.ts
import express, { Request, Response } from 'express'
import { contactSenderController } from './controllers/sender.controller'

const app = express()

app.use(express.json())

//Rota com o verbo POST para a url /form
app.post('/form', contactSenderController)

app.listen(3000, () => {
    console.log('Server running')
})
  

