module.exports = [
  {
    id: 'sword',
    name: 'Bronze Sword',
    examine: 'A sword made of Bronze.',
    price: 15,
    type: 'weapon',
    slot: 'right_hand',
    wearable: 'sword',
    attack: 3,
    graphics: {
      tileset: 'weapons',
      row: 0,
      column: 0,
    },
    actions: [
      'take',
      'examine',
      'drop',
      'equip',
      'unequip',
    ],
    stackable: false,
  },
  {
    id: 'axe',
    name: 'Bronze Axe',
    examine: 'An axe made for chopping.',
    price: 11,
    type: 'weapon',
    slot: 'right_hand',
    wearable: 'sword',
    attack: 4,
    graphics: {
      tileset: 'weapons',
      row: 0,
      column: 1,
    },
    actions: [
      'take',
      'examine',
      'drop',
      'equip',
      'unequip',
    ],
    functions: [
      'chop',
    ],
    stackable: false,
  },
  {
    id: 'dagger',
    name: 'Bronze Dagger',
    examine: 'An short and sturdy dagger.',
    price: 9,
    type: 'weapon',
    slot: 'right_hand',
    wearable: 'sword',
    attack: 3,
    graphics: {
      tileset: 'weapons',
      row: 0,
      column: 2,
    },
    actions: [
      'take',
      'examine',
      'drop',
      'equip',
      'unequip',
    ],
    functions: [
      //
    ],
    stackable: false,
  },
  {
    id: 'pickaxe',
    name: 'Bronze Pickaxe',
    examine: 'A versatile pickaxe for mining.',
    price: 13,
    type: 'weapon',
    slot: 'right_hand',
    wearable: 'sword',
    attack: 5,
    graphics: {
      tileset: 'weapons',
      row: 0,
      column: 3,
    },
    actions: [
      'take',
      'examine',
      'drop',
      'equip',
      'unequip',
    ],
    functions: [
      //
    ],
    stackable: false,
  },
];
