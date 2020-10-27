'use strict'

const Schema = use('Schema')

class NoteSchema extends Schema {
  up() {
    this.create('notes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('notes')
  }
}

module.exports = NoteSchema