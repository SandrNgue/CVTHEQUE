import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Languages extends BaseSchema{
    protected tableName = 'languages'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idLanguage').unsigned().primary()
            table.string('Title').unsigned().defaultTo
            table.integer('Level').unsigned().notNullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}