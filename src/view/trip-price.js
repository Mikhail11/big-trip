export function createTripPriceTemplate(points) {
  let totalSum = 0;
  for (let i = 0; i < points.length; i++){
    const offersArr = points[i].offers;
    for(let j = 0; j < offersArr.length; j++){
      totalSum += points[i].basePrice + offersArr[j].price;
    }
  }

  return `<p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalSum}</span>
          </p>`;
}
