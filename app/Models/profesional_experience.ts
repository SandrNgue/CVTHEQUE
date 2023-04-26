import { BaseModel, ManyToMany, column, manyToMany } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";
import User from "./User";

export default class profesional_experience extends BaseModel{
    @column({isPrimary: true})
    public idExpérience: number

    @column()
    public organisation: string

    @column()
    public function : string

    @column()
    public job: string

    @column.dateTime({autoCreate: true, autoUpdate: true})
    public createdAt : DateTime

    @column.dateTime({autoCreate: true, autoUpdate: true})
    public lastDate : DateTime

    @manyToMany( () => User, { pivotTable: 'user_profesionnal'})
    public profesionnal_experiences : ManyToMany<typeof User>

    @column()
    public describe : string
}