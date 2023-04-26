import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Country extends BaseSchema{
    protected tableName = 'Country'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idCountry').primary()
            table.string('nameofCountry')
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
