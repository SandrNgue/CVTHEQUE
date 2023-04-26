import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class achievement extends BaseSchema{
    protected tableName = 'achievements'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idAchievement').primary()
            table.string('name').notNullable()
            table.string( 'status').notNullable()
            table.timestamp('FirstDate').nullable()
            table.timestamp('LastDate').nullable()
            table.string('TeamManager').nullable()
            table.string('partners').nullable()
            table.string('Urlproject').nullable()
            table.string('describe').nullable()
            table.unique(['Urlproject'])
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)

    }
}
