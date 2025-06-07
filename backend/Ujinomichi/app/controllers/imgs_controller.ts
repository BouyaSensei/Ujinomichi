import type { HttpContext } from '@adonisjs/core/http'
//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const dirname = fileURLToPath(import.meta.url)
export default class ImgsController {
  public async getImg({ params, response }: HttpContext) {
    console.log(params.filename)
    const imagePath = path.join(dirname, '..', '..', '../', 'public', 'img', params.filename)
    //imagePath = path.join(imagePath, params.filename) // Append filename to the path
    console.log(imagePath) // Log the image path for debugging purposes
    try {
      await response.download(imagePath)
    } catch (error) {
      return response.status(404).json({ error: 'Image not found' })
    }
  }
}
