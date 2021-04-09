import dayjs from 'dayjs';

export function generateTripInfo(points) {
  return {
    tripLabel: generateTripLabel(points),
    tripDates: generateTripDates(points[0].date_from, points[points.length-1].date_to),
  };
}

function generateTripLabel(points){
  let tripInfoLabel = '';
  if(points.length > 3){
    tripInfoLabel += `${points[0].destination.name} - ... - ${points[points.length-1].destination.name}`;
  }
  else {
    for (let i = 0; i < points.length; i++) {
      tripInfoLabel += (i === 0) ? `${points[i].destination.name}` : ` - ${points[i].destination.name}`;
    }
  }
  return tripInfoLabel;
}

function generateTripDates(start, end) {
  const tripDateFrom = dayjs(start).format('MMM DD');
  const tripDateTo = ` - ${dayjs(end).format('DD')}`;
  return tripDateFrom + tripDateTo;
}
