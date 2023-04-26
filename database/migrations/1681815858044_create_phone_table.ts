import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Phone extends BaseSchema{
    protected tableName = 'phone'

    public async up(){
        this.schema.createTable(this.tableName, (table) =>  {
            table.engine('InnoDB')
            table.increments('idPhone').unsigned().primary()
            table.integer('phoneNumber').unsigned().notNullable()
            table.boolean('mobile').unsigned().notNullable()
            table.boolean('telegram').unsigned().notNullable()
            table.boolean('whatsapp').unsigned().notNullable()
            table.string('countrycode').unsigned().notNullable()

            table.unique(['phoneNumber'])
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}