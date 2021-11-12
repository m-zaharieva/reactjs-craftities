import { Router } from "./../node_modules/express/index.js";


const router = Router();

router.get('/', (req, res) => {
   res.send('New File here') 
});

router.get('/api', (req, res) => {
   console.log('API get request');
   res.status(200).json({message: 'Hello from server side'});
});

export default router;

