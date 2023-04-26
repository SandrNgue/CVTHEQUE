import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Languages extends BaseModel{
    @column({ isPrimary: true})
    public idLanguage: number

    @column()
    public Title:string

    @column()
    public Level:number
}


