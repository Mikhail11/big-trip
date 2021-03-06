import dayjs from 'dayjs';
import {formatTimePeriod} from '../utils/point.js';
import Abstract from './abstract.js';

function createItemTemplate(points) {

  const {type, date_from, date_to, basePrice, offers, isFavorite} = points;

  const dateFromTime = dayjs(date_from);
  const dateToTime = dayjs(date_to);
  const dateDay = dayjs(date_from).format('MMM DD');
  const favoriteButtonClass = isFavorite ? 'event__favorite-btn--active' : '';
  const offersTemplate = offers.map(({title, price}) => (`<li class="event__offer">
                    <span class="event__offer-title">${title}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${price}</span>
                  </li>`)).join('');
  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${dateDay}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dayjs(dateFromTime).format('YYYY-MM-DDTHH:mm')}">${dayjs(dateFromTime).format('HH:mm')}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dayjs(dateToTime).format('YYYY-MM-DDTHH:mm')}">${dayjs(dateToTime).format('HH:mm')}</time>
                  </p>
                  <p class="event__duration">${formatTimePeriod(dateFromTime, dateToTime)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${offersTemplate}
                </ul>
                <button class="event__favorite-btn ${favoriteButtonClass}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}

export default class Item extends Abstract{
  constructor(data) {
    super();
    this._data = data;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate(){
    return createItemTemplate(this._data);
  }

  _clickHandler(evt){
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback){
    this._callback.click = callback;

    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._clickHandler);
  }

}
