const EVENT_PLACES = [
  'Roma',
  'Milan',
  'Florence',
  'Venezia',
  'Siena',
  'Verona',
  'Napoli',
  'Catania',
  'Bari',
];

const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'transport',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const OFFERS = [
  {
    type: 'taxi',
    offers: [
      {
        title: 'Upgrade to comfort class',
        price: 5,
      },
      {
        title: 'Upgrade to business class',
        price: 10,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        title: 'Choose the radio station',
        price: 5,
      },
      {
        title: 'Upgrade to comfort class',
        price: 7,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        title: 'Choose the radio station',
        price: 5,
      },
      {
        title: 'Upgrade to comfort class',
        price: 7,
      },
    ],
  },
  {
    type: 'ship',
    offers: [
      {
        title: 'Add luggage',
        price: 5,
      },
      {
        title: 'Upgrade to comfort class',
        price: 7,
      },
    ],
  },
  {
    type: 'transport',
    offers: [
      {
        title: 'Choose the radio station',
        price: 5,
      },
      {
        title: 'Upgrade to comfort class',
        price: 7,
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        title: 'Choose the radio station',
        price: 5,
      },
      {
        title: 'Upgrade to comfort class',
        price: 7,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        title: 'Choose the radio station',
        price: 5,
      },
      {
        title: 'Upgrade to comfort class',
        price: 7,
      },
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        title: 'Choose the meal',
        price: 5,
      },
      {
        title: 'Choose bed',
        price: 7,
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        title: 'Choose the meal',
        price: 5,
      },
      {
        title: 'Choose the time of the day',
        price: 7,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        title: 'Choose the meal',
        price: 5,
      },
      {
        title: 'Choose the view',
        price: 7,
      },
    ],
  },
];

const DESTINATION_DESCRIPTIONS = [
  'Aliquam erat volutpat. ',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus. ',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  'Cras aliquet varius magna, non porta ligula feugiat eget. ',
  'Fusce tristique felis at fermentum pharetra. ',
  'Aliquam id orci ut lectus varius viverra. ',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. ',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. ',
  'Sed sed nisi sed augue convallis suscipit in sed felis. ',
];

export {DESTINATION_DESCRIPTIONS, OFFERS, EVENT_PLACES, EVENT_TYPES};
