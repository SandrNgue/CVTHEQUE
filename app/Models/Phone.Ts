import {BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Phone extends BaseModel{
    @column({ isPrimary: true})
    public idPhone: number

    @column()
    public phoneNumber: number

    @column()
    public mobile: boolean


    @column()
    public telegram:boolean
    
    @column()
    public whatsapp:boolean

    @column ()
    public countrycode:string
}