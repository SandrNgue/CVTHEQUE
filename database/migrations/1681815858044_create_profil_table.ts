import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profile extends BaseSchema{
    protected tableName = 'profile'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idProfile').primary()
            table.string('Firstname').unsigned().notNullable()
            table.string('Lastname').unsigned().notNullable()
            table.string('Email', 255).notNullable()
            table.string('Marital_status').unsigned().nullable()
            table.string('Profil_name').unsigned().notNullable()
            table.string('picture').unsigned().notNullable()
            table.date('birthdate').unsigned().notNullable()
            table.integer('number_of_children').unsigned().nullable()
            table.string('place_of_birth').unsigned().notNullable()
            table.string('driver_licence').unsigned().nullable()
            table.string('health').unsigned().notNullable()

            table.unique(['Email'], {indexName: 'email'})
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}