import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('phone_number', 255)
      table.string('delivery_address', 255)
      table.string('password').notNullable()
      table.string('command_order', 255).nullable()
      table.text('basket').nullable()
      table.text('wishlist').nullable()
      table.string('payment_method').nullable()
      table.string('jwt_token').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
