import Abstract from './abstract.js';

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

export default class TripPrice extends Abstract{
  constructor(points) {
    super();
    this._points = points;
  }

  getTemplate(){
    return createTripPriceTemplate(this._points);
  }

}
