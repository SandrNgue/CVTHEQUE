import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Training extends BaseSchema{
    protected tableName = 'trainings'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idTraining').primary()
            table.string('school').nullable()
            table.string('diploma').nullable()
            table.string('fields_of_study').nullable()
            table.timestamp('FirstDate').nullable()
            table.timestamp('LastDate').nullable()
            table.string('mention').nullable()
            table.string('describe').nullable()

        })

    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
