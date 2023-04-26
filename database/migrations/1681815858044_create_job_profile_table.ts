import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Job_profil extends BaseSchema {
    protected tableName = 'job_profils'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idJobProfil')
            table.string('entitled')
              .nullable()
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
