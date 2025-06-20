import type { HttpContext } from '@adonisjs/core/http'
//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
  public async createUser({ request, response }: HttpContext) {
    const userData = request.only(['email', 'password'])
    const user = await User.create(userData)
    return response.created(user)
  }
  public async getUserInfo({ request, response }: HttpContext) {
    const user = request.only(['userId'])
    //console.log(user.userId)

    const userInfo = await User.findOrFail(user.userId)
    return userInfo.toJSON()
  }
  public async addToBasket({ request, response }: HttpContext) {
    const user = request.only(['userId'])
    const product = request.only(['productId', 'productQuantity'])
    const check = await User.findByOrFail('id', user.userId)
    if (check !== undefined) {
      const productDetails = {
        productId: product.productId,
        productQuantity: product.productQuantity,
      }

      if (check.basket !== null) {
        const currentBasket = JSON.parse(check.basket)
        currentBasket.push(productDetails)
        check.basket = JSON.stringify(currentBasket)
      } else {
        check.basket = JSON.stringify([productDetails])
      }

      console.log(check.basket)
      check.save()
    }
  }
  public async removeToBasket({ request, response }: HttpContext) {
    const user = request.only('userId')
    const userInfo = await User.findOrFail(user.userId)

    userInfo.basket = null
    userInfo.save()
  }
  public async removeProductToBasket({ request, response }: HttpContext) {
    const user = request.only(['userId', 'productId'])
    console.log(user.productId)
    const userInfo = await User.findOrFail(user.userId)
    const products = JSON.parse(userInfo.basket)
    const newBasket: Array<[]> = products.filter(
      (product: any) => product.productId !== user.productId.toString()
    )
    userInfo.basket = JSON.stringify(newBasket)
    userInfo.save()
  }
  public async incrementProductToBasket({ request, response }: HttpContext) {
    const user = request.only(['userId', 'productId'])
    const userInfo = await User.findOrFail(user.userId)
    const products = JSON.parse(userInfo.basket)
    const newBasket: Array<[]> = []
    products.forEach((product: any) => {
      if (product.productId === user.productId.toString()) {
        product.productQuantity++
      }
      newBasket.push(product)
    })

    //console.log(newBasket)
    userInfo.basket = JSON.stringify(newBasket)
    userInfo.save()
  }
  public async decrementProductToBasket({ request, response }: HttpContext) {
    const user = request.only(['userId', 'productId'])

    const userInfo = await User.findOrFail(user.userId)
    const products = JSON.parse(userInfo.basket)
    const newBasket: Array<[]> = []
    products.forEach((product: any) => {
      if (product.productId === user.productId.toString()) {
        product.productQuantity = product.productQuantity - 1
      }
      newBasket.push(product)
    })
    userInfo.basket = JSON.stringify(newBasket)
    userInfo.save()
  }
  public async addToWishList({ request, response }: HttpContext) {
    const user = request.only(['userId'])
    const product = request.only(['productId'])
    const check = await User.findByOrFail('id', user.userId)
    if (check !== undefined) {
      const productDetails = {
        productId: product.productId,
      }

      if (check.wishlist !== null) {
        const currentWishList = JSON.parse(check.wishlist)
        currentWishList.push(productDetails)
        check.wishlist = JSON.stringify(currentWishList)
      } else {
        check.wishlist = JSON.stringify([productDetails])
      }

      check.save()
    }
  }
  public async removeToWishList({ request, response }: HttpContext) {
    const user = request.only(['userId'])
    const product = request.only(['productId'])
    const check = await User.findByOrFail('id', user.userId)
    if (check !== undefined) {
      let currentWishList = JSON.parse(check.wishlist)

      currentWishList = currentWishList.filter(
        (item: any) => item.productId !== product.productId.toString()
      )
      check.wishlist = JSON.stringify(currentWishList)
      check.save()
    }
  }
  public async getWishList({ request, response }: HttpContext) {
    const user = request.only(['userId'])

    const userInfo = await User.findByOrFail('id', user)

    return userInfo.wishlist
  }
  public async updateAddress({ request, response }: HttpContext) {
    const data = request.only(['userId', 'delivery_address'])
    //console.log('address', data)
    const userInfo = await User.findByOrFail('id', data.userId)

    if (userInfo.delivery_address === null) {
      console.log(data.delivery_address)
      userInfo.delivery_address = JSON.stringify([data.delivery_address])
    } else {
      const currentAddress = JSON.parse(userInfo.delivery_address)
      currentAddress.forEach((address: any) => {
        if (address.address_name === data.delivery_address.address_name) {
          address = data.delivery_address
        }
      })
      currentAddress.push(data.delivery_address)
      userInfo.delivery_address = JSON.stringify(currentAddress)
    }
    //userInfo.save()
    console.log(userInfo.delivery_address)

    //return response.status(200).json({ message: 'Address updated successfully' })
  }
  public async modifyUser({ request, response }: HttpContext) {
    //return response.status(200).json({ userId: request })
    const data = request.all()
    const userId = data.userData['userId']
    const userInfo = await User.findOrFail(userId)
    //console.log(data.userData)
    if (!(await hash.verify(userInfo.password, data.userData['currentPassword']))) {
      throw new Error('Invalid credentials')
    }
    for (const key in data.userData) {
      if (data.userData[key] && key !== 'userId' && key !== 'currentPassword') {
        //console.log(data.userData[key])
        /*if (key === 'password') {
          console.log(data.userData[key])
          const passwordhash = await hash.make(data.userData[key])
          userInfo[key] = passwordhash
          continue
        }*/
        ;(userInfo as any)[key] = data.userData[key]
      }
    }
    // const userInfo = await User.findOrFail(userData.userId)
    // userInfo.phone_number = ''
    await userInfo.save()
    //User.updateOrCreate()
  }
  public async createUserTest({ request, response }: HttpContext) {
    const userData = { email: 'test@test.fr', password: 'test' }
    const user = await User.create(userData)
    return response.created(user)
  }
  public async login({ request, response }) {
    try {
      const email = request.input('email')
      const password = request.input('password')
      //await auth.use('web').attempt(email, password)
      const user = await User.findBy('email', email)
      console.log(password)
      if (!user || !(await hash.verify(user.password, password))) {
        throw new Error('Invalid credentials')
      }
      //response.status(200).json({ userId: user })

      return response.json({
        message: 'Login successful',
        userId: user.id,
      })
    } catch (error) {
      // Handle specific error if any
      console.error(error)
      return response.badRequest({ error: 'Invalid credentials' })
    }
  }
}
