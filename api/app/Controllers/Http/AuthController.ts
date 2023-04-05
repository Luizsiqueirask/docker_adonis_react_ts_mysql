import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import jwt from 'jsonwebtoken'
import User from 'App/Models/User'

export default class AuthController {
  /**
   * 
   * @param request
   * @param response 
   * @returns 
   */
  
  public async register ({ request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = jwt.sign({ email }, 'secret')


    const user = await User.create({
      email,
      password: await Hash.make(password),
      rememberMeToken: token
    })

    return response.status(201).json({ user, token })
  }

  public async login ({ request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.findBy('email', email)

    if (!user) {
      return response.status(401).json({ message: 'Invalid email or password' })
    }

    const isValidPassword = await Hash.verify(user.password, password)

    if (!isValidPassword.valueOf) {
      return response.status(401).json({ message: 'Invalid email or password' })
    }

    const token = jwt.sign({ email }, 'secret')

    return response.status(200).json({ user: user, token: token })
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.use('api').revoke()
    response.send('Logout...')
    return {
      revoked: true
    }
  }
}
