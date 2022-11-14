import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pet from 'App/Models/Pet'

export default class PetsController {
  public async index({}: HttpContextContract) {
    const pets = await Pet.all()
    if (pets.length === 0){
      return "There aren't pets here!"
    }
    return pets
  }

  public async show({response, params}: HttpContextContract) {
    const pet = await Pet.findOrFail(params.id)
    response.status(201)
    return pet
  }

  public async store({request}: HttpContextContract) {
    const petData = request.body()
    const pet = await Pet.create(petData)
    return pet
  }

  public async update({}: HttpContextContract) {}

  public async destroy({response, params}: HttpContextContract) {
    const pet = await Pet.findOrFail(params.id)
    await pet.delete()
    response.status(201)
    return pet
  }
}
