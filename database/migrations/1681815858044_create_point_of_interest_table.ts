import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Point_of_interest extends BaseSchema{
    protected tableName = 'Pont_of_interest'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idPoint').unsigned().primary()
            table.string('Title').unsigned().notNullable()
        })
    }
}