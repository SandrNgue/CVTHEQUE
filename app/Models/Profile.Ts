import { column } from "@ioc:Adonis/Lucid/Orm"
import { BelongsTo } from "@ioc:Adonis/Lucid/Orm"
import { belongsTo } from "@ioc:Adonis/Lucid/Orm"
import { BaseModel } from "@ioc:Adonis/Lucid/Orm"
import { DateTime } from "luxon"
import { User } from 'app/Models'

export default class Profile extends BaseModel{
    @column({isPrimary: true})
    public idProfile: true

    @column()
    public Firstname:string

    @column()
    public Lastname:string

    @column()
    public Email:string

    @column()
    public Marital_status: string

    @column()
    public Profil_name: string

    @column()
    public picture: string

    @column.date()
    public birthdate: DateTime

    @column()
    public number_of_children : number | null

    @column()
    public place_of_birth : string

    @column()
    public driver_licence : string | null

    @column()
    public health : string

    @belongsTo( () => User)
    public users: BelongsTo<typeof User>

    /*@hasMany( () => User, {pivotTable: 'user_profil'})
    public users: hasMany<typeof User>*/

    constructor(){
        super()
        this.number_of_children = null
        this.driver_licence = null
    }
}