import SiteMenuView from './view/menu.js';
import TripInfoView from './view/trip-info.js';
import TripPriceView from './view/trip-price.js';
import MainFilterView from './view/filters.js';
import SortElementView from './view/sort.js';
import ItemsListView from './view/items-list.js';
import EditItemView from './view/edit-item.js';
import ItemView from './view/item.js';
import {createItemAddTemplate} from './view/add-item.js';
import {generatePoints} from './mock/point.js';
import {generateTripInfo} from './mock/trip-info.js';
import {OFFERS} from './const.js';
import {renderTemplate, RenderPosition, render} from './utils.js';

const ITEMS_COUNT = 15;
const points = new Array(ITEMS_COUNT).fill().map(generatePoints);
points.forEach((item) => {
  const offersItem = OFFERS.find((offer) => (item.type === offer.type));
  item.offers = offersItem.offers;
});

points.sort((a, b) => {
  return a.date_from - b.date_from;
});


const siteBodyElement = document.querySelector('.page-body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const tripMainInfo = siteHeaderElement.querySelector('.trip-main');
const tripMainNavigation = tripMainInfo.querySelector('.trip-controls__navigation');
const tripMainFilters = tripMainInfo.querySelector('.trip-controls__filters');
const tripMainPageEvents = siteBodyElement.querySelector('.trip-events');
const tripInfoData = generateTripInfo(points);

render(tripMainInfo, new TripInfoView(tripInfoData).getElement(), RenderPosition.AFTERBEGIN);
render(tripMainNavigation, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);

const tripInfo = tripMainInfo.querySelector('.trip-info');

render(tripInfo, new TripPriceView(points).getElement(), RenderPosition.BEFOREEND);
render(tripMainFilters, new MainFilterView().getElement(), RenderPosition.BEFOREEND);
render(tripMainPageEvents, new SortElementView().getElement(), RenderPosition.BEFOREEND);
render(tripMainPageEvents, new ItemsListView().getElement(), RenderPosition.BEFOREEND);

const itemsList = tripMainPageEvents.querySelector('.trip-events__list');

points.forEach((item) => renderItems(itemsList, item));

renderTemplate(itemsList, createItemAddTemplate(), 'beforeend');

function renderItems(itemListElement, item) {
  const itemComponent = new ItemView(item);
  const itemEditComponent = new EditItemView(item);

  itemComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceItemToEditForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  itemEditComponent.getElement().querySelector('.event--edit').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceEditFormToItem();
    document.removeEventListener('keydown',onEscKeyDown);
  });

  itemEditComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceEditFormToItem();
    document.removeEventListener('keydown',onEscKeyDown);
  });

  render(itemListElement, itemComponent.getElement(), RenderPosition.BEFOREEND);


  function replaceItemToEditForm(){
    itemListElement.replaceChild(itemEditComponent.getElement(), itemComponent.getElement());
  }

  function replaceEditFormToItem(){
    itemListElement.replaceChild(itemComponent.getElement(), itemEditComponent.getElement());
  }

  function onEscKeyDown(evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceEditFormToItem();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  }

}

export {points};
