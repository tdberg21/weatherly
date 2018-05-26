import React from 'react';
<<<<<<< HEAD
import data from '../src/mock-data'

=======
import data from '../../src/mock-data'
// import fetchData from '../src/apiCalls.js'
>>>>>>> ef83560... Update cards

// const fetchedData = (state, city) => fetchData(state, city);

const cleanData = (fetchedData) => {
 let cleanObj = {
    city: data.current_observation.display_location.city,
    state: data.current_observation.display_location.state,
    currTemp: data.current_observation.temp_f,
    highTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    lowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    currConditions: data.current_observation.weather,
    conditionSummary: data.forecast.txt_forecast.forecastday[0].fcttext
  }

  return cleanObj
}

<<<<<<< HEAD
console.log(cleanData());

export const cleanTenDay = (fetchedData) => {
  let tenHourArray = [];
  const tenHour = data.forecast.simpleforecast.forecastday.forEach(day => {
    tenHourArray.push({
      day: day.date.weekday,
      img: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit
    })
    return tenHourArray;
});
    return tenHourArray
}



// console.log(cleanTenDay());
=======
export default cleanData;
>>>>>>> ef83560... Update cards


