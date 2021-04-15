import {createNewElement} from '../utils.js';

function createTripPriceTemplate(points) {
  let totalSum = 0;
  for (let i = 0; i < points.length; i++){
    const offersArr = points[i].offers;
    offersArr.forEach((item) => totalSum += points[i].basePrice + item.price);
  }

  return `<p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalSum}</span>
          </p>`;
}

export default class TripPrice {
  constructor(points) {
    this._element = null;
    this._points = points;
  }

  getTemplate(){
    return createTripPriceTemplate(this._points);
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
