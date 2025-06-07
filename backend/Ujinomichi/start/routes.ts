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
router.post('/login', [UserController, 'login'])

// Product routes
router.get('/create-product', [ProductController, 'createProductTest'])
router.get('/get-product', [ProductController, 'getAllProducts'])
router.get('/get-last-products', [ProductController, 'getLastProducts'])
router.get('/get-product/:id', [ProductController, 'getSingleProduct'])
