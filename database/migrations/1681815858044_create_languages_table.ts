import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Languages extends BaseSchema{
    protected tableName = 'languages'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idLanguage').primary()
            table.string('Title').nullable()
            table.integer('Level').nullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
