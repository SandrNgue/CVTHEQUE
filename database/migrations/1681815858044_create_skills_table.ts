import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class skill extends BaseSchema {
    protected tableName = 'skills'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idSkill').primary()
            table.string('name').nullable()
            table.string('level').nullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
