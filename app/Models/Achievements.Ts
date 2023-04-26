import { column, BaseModel, DateTime  } from "@ioc:Adonis/Lucid/Orm"

export default class achievement extends BaseModel{
    @column({isPrimary : true})
    public idAchievement: number

    @column()
    public name : string

    @column()
    public status :string

    @column.DateTime({autoUptodate: true})
    public FirstDate : DateTime

    @column.DateTime({autoUptodate: true})
    public LastDate :DateTime

    @column()
    public TeamManager : string

    @column()
    public partners : string

    @column()
    public Urlproject : string | null

    @column()
    public describle : string | null

    constructor(){
        super()
        this.Urlproject =null
        this.describle = null
    }
}