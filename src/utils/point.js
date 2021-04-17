
export function formatTimePeriod(start, end) {
  const datePeriod = end.diff(start, 'minute', true);
  let result = '';
  if(datePeriod > 1440){
    const days = Math.floor(datePeriod / 1440);
    result = Math.floor(days / 10) ? result + days + 'D ' : result + '0' + days + 'D ';
  }
  const minutes = datePeriod % 1440;
  if(minutes > 60){
    if(minutes % 60 === 0) {
      result = result + '00H ';
    }
    else {
      const hours = Math.floor(minutes / 60);
      result = Math.floor(hours / 10) ? result + hours + 'H ' : result + '0' + hours + 'H ';
    }
  }
  if(datePeriod % 60 === 0){
    result += '00M';
  }
  else if(Math.floor((datePeriod % 60)/10)){
    result = result + datePeriod % 60 + 'M';
  }
  else {
    result = result + '0' + datePeriod % 60 + 'M';
  }
  return result;
}
