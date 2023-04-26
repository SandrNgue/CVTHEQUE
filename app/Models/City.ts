import { column, BaseModel } from "@ioc:Adonis/Lucid/Orm"

export default class City extends BaseModel{
    @column({ isPrimary: true})
    public numCity: number

    @column()
    public designation:string
}