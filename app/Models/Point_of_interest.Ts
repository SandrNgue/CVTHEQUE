import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm"

export default class Point_of_interest extends BaseModel{
    @column({isPrimary: true})
    public idPoint : number

    @column()
    public Title : string
}