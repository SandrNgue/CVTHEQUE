import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class profesional_experience extends BaseSchema{
    protected tableName = 'profesional_experience'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idExperience').unsigned().primary()
            table.text('organisation').unsigned().notNullable()
            table.text('function').unsigned().notNullable()
            table.text('job').unsigned().notNullable()
            table.timestamp('createdAt').notNullable()
            table.timestamp('lastDate').notNullable()
            table.text('describe').unsigned().notNullable()
            table.string('profesionnal_experiences').unsigned().references('id').inTable('User').onDelete('SET NULL')

        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}