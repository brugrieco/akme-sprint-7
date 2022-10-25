const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productsAPIController');
const multerMiddleware = require('../../middleware/multer');
const uploadFile = multerMiddleware('images','product');
const adminMiddleware = require('../../middleware/adminMiddleware');
const validation = require('../../middleware/productCreateValidation');

//Rutas

//Listado de productos
router.get('/', productsController.list);
// router.get('/products', productsController.products)

// //detalle de productos
// router.get('/detail/:id', productsController.detail)

// //editar producto
// router.get('/edit/:id', adminMiddleware, productsController.edit)
// router.put('/edit/:id', uploadFile.array('image'), productsController.update)

// //crear producto
// router.get('/create', adminMiddleware, productsController.create)
// router.post('/create',uploadFile.array('image'), validation, productsController.store);

// //eliminar producto
// router.delete('/delete/:id', adminMiddleware, productsController.delete);

module.exports = router;