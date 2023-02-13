// src/app.ts
import express, { Request, Response } from 'express'
import { contactSenderController } from './controllers/sender.controller'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json());

//Rota com o verbo POST para a url /form
app.post('/form', contactSenderController)

app.listen(8080, () => {
    console.log('Server running')
})
  

