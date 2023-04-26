import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class achievement extends BaseSchema{
    protected tableName = 'achievements'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idAchievement').primary()
            table.string('name').unsigned().notNullable()
            table.string('status').unsigned().notNullable()
            table.timestamp('FirstDate').notNullable()
            table.timestamp('LastDate').notNullable()
            table.string('TeamManager').unsigned().notNullable()
            table.string('partners').unsigned().notNullable()
            table.string('Urlproject').unsigned().nullable()
            table.string('describe').unsigned().nullable()
            table.unique(['Urlproject'])
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
        
    }
}