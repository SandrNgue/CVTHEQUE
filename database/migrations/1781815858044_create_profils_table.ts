import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profile extends BaseSchema{
    protected tableName = 'profils'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idProfile').primary()
            table.string('Firstname').nullable()
            table.string('Lastname').nullable()
            table.string('Email', 255).notNullable()
            table.string('Marital_status').nullable()
            table.string('Profil_name').nullable()
            table.string('picture').nullable()
            table.date('birthdate').nullable()
            table.integer('number_of_children').nullable()
            table.string('place_of_birth').nullable()
            table.string('driver_licence').nullable()
            table.string('health').nullable()
            table.integer(  'idJobProfil')
              .unsigned()
              .nullable()
            table.foreign('idJobProfil')
              .references('idJobProfil')
              .inTable('job_profils')
              .onDelete('SET NULL')

            table.unique(['Email'], {indexName: 'email'})
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
