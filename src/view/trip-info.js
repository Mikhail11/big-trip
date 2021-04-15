import {createNewElement} from '../utils.js';

function createTripInfoTemplate(tripInfo) {
  const {tripLabel, tripDates} = tripInfo;
  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${tripLabel}</h1>

              <p class="trip-info__dates">${tripDates}</p>
            </div>
          </section>`;
}

export default class TripInfo{
  constructor(data) {
    this._element = null;
    this._data = data;
  }

  getTemplate(){
    return createTripInfoTemplate(this._data);
  }

  getElement(){
    if(!this._element){
      this._element = createNewElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement(){
    this._element = null;
  }
}
