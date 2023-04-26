import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class profesional_experience extends BaseSchema{
    protected tableName = 'profesional_experiences'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idExperience')
            table.text('organisation').nullable()
            table.text('function').nullable()
            table.text('job').nullable()
            table.timestamp('createdAt').nullable()
            table.timestamp('lastDate').nullable()
            table.text('describe').nullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
