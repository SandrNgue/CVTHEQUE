import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Justification extends BaseSchema {
    protected tableName = 'Justification'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('IdJustification').primary()
            table.string('project_link').nullable()
            table.string('describe').nullable()
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
