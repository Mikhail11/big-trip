import dayjs from 'dayjs';
import {DESTINATION_DESCRIPTIONS, EVENT_TYPES, EVENT_PLACES} from '../const.js';
import {getRandomDataFromArray, generateRandomNumber} from '../utils/common.js';

let eventId = 0;

export function generatePoints() {
  const dateFrom = dayjs().add(generateRandomNumber(-2880,2880), 'minute').toDate();
  const dateTo = dayjs(dateFrom).add(generateRandomNumber(15, 360),'minute').toDate();
  const place = getRandomDataFromArray(EVENT_PLACES);
  return {
    id: generateId(),
    type: getRandomDataFromArray(EVENT_TYPES),
    date_from: dateFrom,
    date_to: dateTo,
    basePrice: generateRandomNumber(10, 100),
    offers: null,
    destination: generateDestination(place),
    isFavorite: generateRandomNumber(),
  };
}

function generateId() {
  return eventId++;
}

function generateImage() {
  return {
    src: `http://picsum.photos/248/152?r=${generateRandomNumber(1, 20)}`,
    description: DESTINATION_DESCRIPTIONS[generateRandomNumber(0, DESTINATION_DESCRIPTIONS.length-1)],
  };
}

function generateDestination(place) {
  const descriptionArray = DESTINATION_DESCRIPTIONS.slice(generateRandomNumber(DESTINATION_DESCRIPTIONS.length-1));
  let description = '';
  const images = new Array(generateRandomNumber(0,5)).fill().map(generateImage);

  descriptionArray.forEach((item) => {
    description += item;
  });
  return {
    description: description,
    name: place,
    pictures: images,
  };
}

