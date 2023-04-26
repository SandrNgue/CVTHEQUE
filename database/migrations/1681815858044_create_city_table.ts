import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class City extends BaseSchema{
    protected tableName = 'City'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('numCity').primary()
            table.string('designation').unsigned().notNullable()

        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}