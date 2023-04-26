import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class skill extends BaseSchema {
    protected tableName = 'skill'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idSkill').primary()
            table.string('name').unsigned().notNullable()
            table.string('level').unsigned().notNullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}