import { BaseModel, column} from "@ioc:Adonis/Lucid/Orm"

export default class Country extends BaseModel{
    @column({ isPrimary: true})
    public idCountry: number

    @column()
    public nameofCountry:string
}

