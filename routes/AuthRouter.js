import Router from 'express'
const router = new Router()
import helmet from 'helmet';



import AuthController from '../AuthController.js'

router.use(helmet())

router.post('/login', AuthController.signIn)
router.post('/regist', AuthController.signUp)



export default router