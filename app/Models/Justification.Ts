import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm"

export default class Justification extends BaseModel{
    @column({isPrimary: true})
    public IdJustification : number

    @column()
    public project_link : string

    @column()
    public describe : string
}