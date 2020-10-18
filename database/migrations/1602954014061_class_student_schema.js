'use strict'

const Schema = use('Schema')

class ClassStudentSchema extends Schema {
  up() {
    this.create('class_students', (table) => {
      table.increments('id')
      table
        .integer('class_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('classes')
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('class_students')
  }
}

module.exports = ClassStudentSchema
