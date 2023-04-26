import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class skill extends BaseModel{
    public static table = "skill"

    @column({isPrimary: true})
    public idSkill : number

    @column()
    public name : string

    @column()
    public level : string

}