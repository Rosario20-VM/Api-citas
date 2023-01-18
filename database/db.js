import {Sequelize} from 'sequelize'

const db = new Sequelize('app_veterinaria', 'root', 'root20',{
    host:'localhost',
    dialect:'mysql'
})
export default db