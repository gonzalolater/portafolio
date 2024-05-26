import {Router} from 'express'
import {login, register} from '../controllers/auth.controller.js'

const router = Router()

router.post('/register')

router.post('/login')

export default router