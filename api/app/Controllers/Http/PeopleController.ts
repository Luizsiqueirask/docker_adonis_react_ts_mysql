import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Person from 'App/Models/Person'

export default class PeopleController {

  public async index({}: HttpContextContract) {
    const people = await Person.all()
    if (people.length === 0){
      return "There aren't people here!"
    }
    return people
  }

  public async show({response, params}: HttpContextContract) {
    const person = await Person.findOrFail(params.id)
    response.status(201)
    return person
  }

  public async store({request, response}: HttpContextContract) {
    const personData = request.body()
    const person = await Person.create(personData)
    response.status(201)
    return { message: "Momentos criados com sucesso", data: person }
    //return {personData: personData, person: person, message: "Succefully!!!" }
  }

  public async update({request, params}: HttpContextContract) {
    const personData = request.body()
    const person = await Person.findOrFail(params.id)

    person.first_name = personData.first_name
    person.last_name = personData.last_name
    person.birthday = personData.birthday
    person.age = personData.age
    person.gender = personData.gender

    await person.save()
    return person
  }

  public async destroy({response, params}: HttpContextContract) {
    const person = await Person.findOrFail(params.id)
    person.delete()
    response.status(201)
  }
}
