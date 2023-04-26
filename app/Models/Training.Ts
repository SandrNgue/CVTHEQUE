import { afterUpdate } from "@ioc:Adonis/Lucid/Orm";
import { column } from "@ioc:Adonis/Lucid/Orm";
import { BaseModel } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class Training extends BaseModel{
    @column({isPrimary : true})
    public idTraining : number

    @column()
    public school : string

    @column()
    public diploma: string

    @column()
    public fields_of_study : string

    @column.dateTime({autoUpdate : true})
    public FirstDate : DateTime

    @column.dateTime({autoUpdate: true})
    public LastDate : DateTime

    @column()
    public mention : string

    @column()
    public describe : string |null

    constructor() {
        super()
        this.describe = null

    }

}