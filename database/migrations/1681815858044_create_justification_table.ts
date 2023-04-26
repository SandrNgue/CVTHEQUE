import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Justification extends BaseSchema {
    protected tableName = 'Justification'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('IdJustification').unsigned().primary()
            table.string('project_link').unsigned().notNullable()
            table.string('describe').unsigned().notNullable()
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}