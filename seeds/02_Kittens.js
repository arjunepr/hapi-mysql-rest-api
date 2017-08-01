
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  const tableName = 'kittens';

  const rows = [
    {
      owner: 'f03ede7c-b121-4112-bcc7-130a3e87988c',
      species: 'ParrotIThink',
      name: 'Shynx',
      pic_url: 'http://pngimg.com/upload/pigeon_PNG3423.png',
      identifier: '4c8d84f1-9e41-4e78-a254-0a5680cd19d5',
      isPublic: true,
    },

    {
      owner: 'f03ede7c-b121-4112-bcc7-130a3e87988c',
      species: 'Zenaida',
      name: 'Mourning dove',
      pic_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mourning_Dove_2006.jpg/220px-Mourning_Dove_2006.jpg',
      identifier: 'ddb8a136-6df4-4cf3-98c6-d29b9da4fbc6',
      isPublic: false,
    },
  ];

  return knex(tableName)
    .del()
    .then(() => knex.insert(rows).into(tableName));
};
