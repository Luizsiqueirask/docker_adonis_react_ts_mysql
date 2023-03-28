import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export default class AuthController {
    public async register({request}: HttpContextContract){
        const {email, password} = request.only(['email', 'password'])
        const hashedPassword = await Hash.make(password)
        const user = await User.create({
            email,
            password: hashedPassword
        })
        return user
    }

    public async login({request, auth}: HttpContextContract){
        const { email, password } = request.only(['email', 'password'])
        const token = await auth.use('api').attempt(email, password)
        return token.toJSON()
    }

    public async logout({ response, auth }: HttpContextContract) {
        await auth.logout()
        return response.redirect().toPath('/')
      }
}
