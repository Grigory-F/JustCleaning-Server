import Router from 'express'
const router = new Router()
import helmet from 'helmet';

router.use(helmet())

import controller from '../queryController.js'



router.post('/client' , controller.createClient)
router.get('/client' , controller.getClient)
router.post('/order' , controller.createOrder)
router.put('/client' , controller.updateClient)
router.get('/articles' , controller.getArticles)
router.get('/*', (req, res) => {
    res.status(404).send('Dont Find 404 my server');
  });



export default router