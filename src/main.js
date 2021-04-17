import SiteMenuView from './view/menu.js';
import TripInfoView from './view/trip-info.js';
import TripPriceView from './view/trip-price.js';
import MainFilterView from './view/filters.js';
import SortElementView from './view/sort.js';
import ItemsListView from './view/items-list.js';
import EditItemView from './view/edit-item.js';
import ItemView from './view/item.js';
import ItemListEmptyView from './view/item-list-empty';
import {generatePoints} from './mock/point.js';
import {generateTripInfo} from './mock/trip-info.js';
import {OFFERS} from './const.js';
import {RenderPosition, render, replace} from './utils/render.js';

const ITEMS_COUNT = 10;
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

render(tripMainNavigation, new SiteMenuView(), RenderPosition.BEFOREEND);

render(tripMainPageEvents, new ItemsListView(), RenderPosition.BEFOREEND);
render(tripMainFilters, new MainFilterView(), RenderPosition.BEFOREEND);

const itemsList = tripMainPageEvents.querySelector('.trip-events__list');

if (points.length !== 0){
  const tripInfoData = generateTripInfo(points);
  render(tripMainInfo, new TripInfoView(tripInfoData), RenderPosition.AFTERBEGIN);

  const tripInfo = tripMainInfo.querySelector('.trip-info');

  render(tripInfo, new TripPriceView(points), RenderPosition.BEFOREEND);
  render(tripMainPageEvents, new SortElementView(), RenderPosition.BEFOREEND);

  points.forEach((item) => renderItems(itemsList, item));
}
else {
  render(itemsList, new ItemListEmptyView(), RenderPosition.BEFOREEND);
}


function renderItems(itemListElement, item) {
  const itemComponent = new ItemView(item);
  const itemEditComponent = new EditItemView(item);

  itemComponent.setClickHandler(() => {
    replaceItemToEditForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  itemEditComponent.setFormSubmitHandler(() => {
    replaceEditFormToItem();
    document.removeEventListener('keydown',onEscKeyDown);
  });

  itemEditComponent.setClickHandler(() => {
    replaceEditFormToItem();
    document.removeEventListener('keydown',onEscKeyDown);
  });

  render(itemListElement, itemComponent, RenderPosition.BEFOREEND);


  function replaceItemToEditForm(){
    replace(itemEditComponent, itemComponent);
  }

  function replaceEditFormToItem(){
    replace(itemComponent, itemEditComponent);
  }

  function onEscKeyDown(evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceEditFormToItem();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  }

}

