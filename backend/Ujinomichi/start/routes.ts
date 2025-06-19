/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UserController = () => import('#controllers/users_controller')
const ProductController = () => import('#controllers/products_controller')
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// User routes
router.post('/create-user', [UserController, 'createUser'])
router.post('/modify-user', [UserController, 'modifyUser'])
router.post('/get-user-info', [UserController, 'getUserInfo'])
router.post('/login', [UserController, 'login'])
router.post('/addToBasket', [UserController, 'addToBasket'])
router.post('removeToBasket', [UserController, 'removeToBasket'])
router.post('removeProductToBasket', [UserController, 'removeProductToBasket'])
router.post('incrementProduct', [UserController, 'incrementProductToBasket'])
router.post('decrementProduct', [UserController, 'decrementProductToBasket'])

router.post('addToWishList', [UserController, 'addToWishList'])
router.post('removeToWishList', [UserController, 'removeToWishList'])
router.post('getWishList', [UserController, 'getWishList'])
router.get('/create-user-test', [UserController, 'createUserTest'])

// Product routes
router.get('/create-product', [ProductController, 'createProductTest'])
router.get('/get-product', [ProductController, 'getAllProducts'])
router.get('/get-last-products', [ProductController, 'getLastProducts'])
router.get('/get-product/:id', [ProductController, 'getSingleProduct'])
