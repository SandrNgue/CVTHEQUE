import { BaseModel, column, ManyToMany, manyToMany } from "@ioc:Adonis/Lucid/Orm"
import Profile from "./Profile.Ts"

export default class Job_profil extends BaseModel{
    @column({isPrimary: true})
    public idProfil: number

    @column()
    public entitled: string

    @manyToMany( () => Profile, {pivotTable: 'profile'})
    public profils: ManyToMany<typeof Profile>
}