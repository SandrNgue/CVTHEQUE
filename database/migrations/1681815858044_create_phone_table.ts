import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Phone extends BaseSchema{
    protected tableName = 'phones'

    public async up(){
        this.schema.createTable(this.tableName, (table) =>  {
            table.engine('InnoDB')
            table.increments('idPhone').primary()
            table.integer('phoneNumber').nullable()
            table.boolean('mobile').nullable()
            table.boolean('telegram').nullable()
            table.boolean('whatsapp').nullable()
            table.string('countrycode').nullable()

            table.unique(['phoneNumber'])
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
