import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Point_of_interest extends BaseSchema{
    protected tableName = 'point_of_interests'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.engine('InnoDB')
            table.increments('idPoint').primary()
            table.string('Title').notNullable()
        })
    }
}
