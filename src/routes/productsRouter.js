const express = require('express');
const router = express.Router();

//Controller
const productsController = require('../controllers/productsController');

//middewares
const validationCreate = require('../middleware/productCreateValidation');
const adminMiddleware = require('../middleware/adminMiddleware');
const multerMiddleware = require('../middleware/multer');
const uploadFile = multerMiddleware('images','product');


//Rutas

//editar productos
router.get('/edit/:id', adminMiddleware, productsController.edit)
router.put('/edit/:id', uploadFile.array('image'), productsController.update)

//crear productos
router.get('/create', adminMiddleware, productsController.create)
router.post('/create',uploadFile.array('image'), validationCreate, productsController.store);

 //ver productos
 router.get('/detail/:id', productsController.detail)
 router.get('/products', productsController.products)

//eliminar productos
router.delete('/delete/:id', adminMiddleware, productsController.delete);

module.exports = router;