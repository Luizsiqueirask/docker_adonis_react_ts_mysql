import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Pet from './Pet'

export default class Person extends BaseModel {
  @hasOne(() => Pet)
  public pets: HasOne<typeof Pet>

  @column({ isPrimary: true })
  public id: number

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public birthday: Date

  @column()
  public age: number

  @column()
  public gender: string  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
