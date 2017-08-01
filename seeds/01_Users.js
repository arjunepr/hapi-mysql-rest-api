exports.seed = (knex, promise) => {
  const tableName = 'users';

  const rows = [
    {
      name: 'Arjun Pillai',
      username: 'juntheprogrammer',
      password: 'lololol',
      email: 'revarjunr@gmail.com',
      identifier: 'f03ede7c-b121-4112-bcc7-130a3e87988c'
    },
  ];

  return knex(tableName)
    // To first empty the table.
    .del()
    .then(() => knex.insert(rows).into(tableName));
};