//importar la base de datos
import db from "../database/db.js";
//importar sequelize
import {DataTypes} from "sequelize";

const AgendaModel = db. define('datoscitas',
{
    nombre:{type:DataTypes.STRING},
    apellido:{type:DataTypes.STRING},
    mascota:{type:DataTypes.STRING},
    raza:{type:DataTypes.STRING},
    edad:{type:DataTypes.STRING},
    fecha:{type:DataTypes.DATE},
    hora:{type:DataTypes.STRING},
    telefono :{type:DataTypes.STRING},
    correo :{type:DataTypes.STRING},

})
 export default AgendaModel