import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Training extends BaseSchema{
    protected tableName = 'Training'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idTraining').primary()
            table.string('school').unsigned().notNullable()
            table.string('diploma').unsigned().notNullable()
            table.string('fields_of_study').unsigned().notNullable()
            table.timestamp('FirstDate').unsigned().notNullable()
            table.timestamp('LastDate').unsigned().notNullable()
            table.string('mention').unsigned().notNullable()
            table.string('describe').unsigned().nullable()

        })

    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}