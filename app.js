import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import datosCitas from './routes/routes.js'

const app = express ()

app.use(cors())
app.use(express.json())
app.use('/citas', datosCitas)

try{
    await db.authenticate()
    console.log('Conexion exitosa')
}catch(error){
    console.log(`Error en la conexion: ${error}`)
}
app.listen(9000, ()=>{
    console.log('Server UP running in http://localhost:9000/')
})
