import type { HttpContext } from '@adonisjs/core/http'
//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from '#models/user'
export default class UsersController {
  public async createUser({ request, response }: HttpContext) {
    const userData = request.only(['email', 'password'])
    const user = await User.create(userData)
    return response.created(user)
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
      if (!user || !(await user.verifyPassword(password))) {
        throw new Error('Invalid credentials')
      }
      console.log('User logged in:', user.id)
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
