import express from 'express'
import {createCita, deleteCita, getCita, updateCita,
     getAllCitas} from '../controllers/CitasController.js'


const router = express.Router()

router.get('/', getAllCitas)
router.get('/:id',getCita)
router.post('/',createCita)
router.put('/:id', updateCita)
router.delete('/:id', deleteCita)

export default router