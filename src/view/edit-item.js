import dayjs from 'dayjs';
import {EVENT_PLACES} from '../const.js';
import Abstract from './abstract.js';

function createItemEditTemplate(point) {
  const {type, date_from, date_to, basePrice, offers, destination} = point;

  const dateFromTime = dayjs(date_from).format('DD/MM/YY HH:mm');
  const dateToTime = dayjs(date_to).format('DD/MM/YY HH:mm');

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        <div class="event__type-item">
                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
                          <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
                    ${generatePlacesListTemplate(EVENT_PLACES)}
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFromTime}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateToTime}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">${basePrice}</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">

                    ${generateOffersForEditItem(offers)}

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">${destination.name}</h3>
                    <p class="event__destination-description">${destination.description}</p>
                    ${generatePhotosTemplate(destination.pictures)}
                  </section>
                </section>
              </form>
            </li>`;
}

function generateOffersForEditItem(offers) {
  let offersTemplate = `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">`;
  if (offers.length !== 0) {
    for (let i = 0; i < offers.length; i++) {
      offersTemplate += `<div class="event__offer-selector">
                      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${i}}" type="checkbox" name="event-offer-${i}" checked>
                      <label class="event__offer-label" for="event-offer-luggage-1">
                        <span class="event__offer-title">${offers[i].title}</span>
                        &plus;&euro;&nbsp;
                        <span class="event__offer-price">${offers[i].price}</span>
                      </label>
                    </div>`;
    }
    return offersTemplate + '</div></section>';
  }
  return '';
}

function generatePhotosTemplate(obj) {
  if (obj.length !== 0){
    let photoListDiv = `<div class="event__photos-container">
      <div class="event__photos-tape">`;
    obj.forEach((item) => photoListDiv += `<img class="event__photo" src="${item.src}" alt="${item.description}">`);
    return photoListDiv + '</div></div>';
  }
  return '';
}

function generatePlacesListTemplate(arr) {
  let placesList = '<datalist id="destination-list-1">';
  arr.forEach((item) => placesList += `<option value="${item}"></option>\n`);
  return placesList + '</datalist>';
}

export default class EditItem extends Abstract{
  constructor(data) {
    super();
    this._data = data;

    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate(){
    return createItemEditTemplate(this._data);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmit();
  }

  _clickHandler(evt){
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback){
    this._callback.click = callback;

    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._clickHandler);
  }

  setFormSubmitHandler(callback){
    this._callback.formSubmit = callback;

    this.getElement().querySelector('.event--edit').addEventListener('submit', this._formSubmitHandler);
  }
}
