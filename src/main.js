import {createSiteMenuTemplate} from './view/menu.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripPriceTemplate} from './view/trip-price.js';
import {createMainFilterTemplate} from './view/filters.js';
import {creatSortElementTemplate} from './view/sort.js';
import {createItemsListTemplate} from './view/items-list.js';
import {createItemEditTemplate} from './view/edit-item';
import {createItemTemplate} from './view/item.js';
import {createItemAddTemplate} from './view/add-item.js';
import {generatePoints} from './mock/point.js';
import {generateTripInfo} from './mock/trip-info';

const ITEMS_COUNT = 15;
const points = new Array(ITEMS_COUNT).fill().map(generatePoints);
points.sort((a, b) => {
  return a.date_from - b.date_from;
});
const tripInfoData = generateTripInfo(points);

const siteBodyElement = document.querySelector('.page-body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const tripMainInfo = siteHeaderElement.querySelector('.trip-main');
const tripMainNavigation = tripMainInfo.querySelector('.trip-controls__navigation');
const tripMainFilters = tripMainInfo.querySelector('.trip-controls__filters');
const tripMainPageEvents = siteBodyElement.querySelector('.trip-events');


render(tripMainInfo, createTripInfoTemplate(tripInfoData), 'afterbegin');
render(tripMainNavigation, createSiteMenuTemplate(), 'beforeend');

const tripInfo = tripMainInfo.querySelector('.trip-info');

render(tripInfo, createTripPriceTemplate(points), 'beforeend');
render(tripMainFilters, createMainFilterTemplate(), 'beforeend');
render(tripMainPageEvents, creatSortElementTemplate(), 'beforeend');
render(tripMainPageEvents, createItemsListTemplate(), 'beforeend');

const itemsList = tripMainPageEvents.querySelector('.trip-events__list');

render(itemsList, createItemEditTemplate(points[0]), 'beforeend');

for (let i = 0; i < points.length; i++){
  render(itemsList, createItemTemplate(points[i]),'beforeend');
}

render(itemsList, createItemAddTemplate(), 'beforeend');

function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
}

export {render};
