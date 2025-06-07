import type { HttpContext } from '@adonisjs/core/http'
//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from '#models/user'
export default class UsersController {
  public async createUser({ request, response }: HttpContext) {
    const userData = request.only(['email', 'password'])
    const user = await User.create(userData)
    return response.created(user)
  }
  public async login({ request, auth, response }) {
    try {
      const email = request.input('email')
      const password = request.input('password')
      await auth.use('web').attempt(email, password)
      return response.ok({ message: 'Login successful' })
    } catch (error) {
      // Handle specific error if any
      console.error(error)
      return response.badRequest({ error: 'Invalid credentials' })
    }
  }
}
