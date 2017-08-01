
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('users', (usersTable) => {

      // Primary key
      usersTable.increments();

      usersTable.string('name', 50).notNullable();
      usersTable.string('username', 50).notNullable().unique();
      usersTable.string('email', 250).notNullable().unique();
      usersTable.string('password', 128).notNullable();
      usersTable.string('identifier', 50).notNullable().unique();

      usersTable.timestamp('created_at').notNullable();

    })

    .createTable('kittens', (kittensTable) => {
      
      // Primary Key
      kittensTable.increments();
      kittensTable.string('owner', 36).references('identifier').inTable('users');


      kittensTable.string('name', 250).notNullable();
      kittensTable.string('species', 250).notNullable();
      kittensTable.string('pic_url', 250).notNullable();
      kittensTable.string('identifier', 36).notNullable().unique();
      kittensTable.boolean('isPublic').notNullable().defaultTo(true);

      kittensTable.timestamp('created_at').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('kittens')
    .dropTableIfExists('users');
};
