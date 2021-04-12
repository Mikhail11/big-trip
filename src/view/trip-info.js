export function createTripInfoTemplate(tripInfo) {
  const {tripLabel, tripDates} = tripInfo;
  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${tripLabel}</h1>

              <p class="trip-info__dates">${tripDates}</p>
            </div>
          </section>`;
}