import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Job_profil extends BaseSchema {
    protected tableName = 'Job_profil'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idJobProfil').unsigned().primary()
            table.string('entitled').unsigned().notNullable()
            table.integer('idProfile', 10).unsigned().references('idJobProfil').inTable('profils').onDelete(' SET NULL')
            table.unique(['idProfile'])
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}