import AgendaModel from "../models/CitasModels.js";
//mostrar todas las citas

export const getAllCitas = async (req, res)=>{
    try{
        const citas = await AgendaModel.findAll()
        res.json(citas)
    }catch (error){
        res.json({mesagge:error.mesagge})
    }

}

//mostar una cita
export const getCita =async (req, res) =>{
    try{
        const cita = await AgendaModel.findAll({
            where:{id:req.params.id}
        })
        res.json(cita[0])
    }catch(error){
        res.json({message:error.mesagge})
    }
}
//crear registro de una cita
export const createCita = async (req, res) =>{
    try{
        await AgendaModel.create(req.body)
        res.json({
            "mesagge":"Cita registrada correctamente"            
        })        
    } catch (error){
        res.json({message:error.mesagge})
    }
}
//Actualizar cita
export const updateCita = async (req, res) =>{
    try{
        await AgendaModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({mesagge:error.mesagge})     

    }
}
//eliminar registro
export const deleteCita = async(req, res) =>{
    try{
        await AgendaModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "mesagge": "Cita eliminada correctamente"
        })
    }catch(error){
    res.json({mesagge:error.mesagge})
    }
}