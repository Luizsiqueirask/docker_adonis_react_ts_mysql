import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export default class AuthController {
  public async register({request, auth}: HttpContextContract){
    const {email, password} = request.only(['email', 'password'])
    const hashedPassword = await Hash.make(password)
    const user = await User.create({ email, password: hashedPassword })
    const token = await auth.use('api').generate(email, password)
    return { user: user, token: token }
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
  
    try {
      return await auth.use('api').attempt(email, password)
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.redirect().toPath('/')
  }
}
