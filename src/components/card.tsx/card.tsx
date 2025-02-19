

//make api call...show on screen
//how to trigger API useCallback, load /btn
//log vs state
//useEffect

//On fetch - grab value from object, store it so can pass or display
//data.current.temp_2m

//call state
//set initial state,

//call function - call set state
//pass response from fetcher to setState

//city is being passed in as a prop
// user input selects city (paris, london, newyork)
// scan over the cities array to find the city that matches the user input
// takes the long/lat from our Const Cities []
// replaces the api fetch url with the correct long/lat
// fetches the data

//call the array cities
//find the city that matches the city.name to the input option


// return (
//   <div>
//     <select onChange={(e) => {
//       const selectedCity = cities.find(city => city.name === e.target.value);
//       if (selectedCity) {
//         onSelectCity(selectedCity.lat, selectedCity.lon); 
//       }
//     }}>












// PLAN
// get the lat and long from the cities array that we selected.
// find the name in the cities array with the name of the city user selects
// return the whole object that matches the name in the array (includes the name, long, lat)
// store this new object as the currentCity
// Make 2 variables - long & lat -
// currentCity.lat & CurrentCity.lon 
// replace the long and lat in the fetch url with the new long and lat
// fetch the data {city}

import { useState, ChangeEvent } from 'react';

interface City {
  name: string;
  lat: number;
  lon: number;
}

export default function Card() {
  const [temp, setTemp] = useState(null);
  // Need state to use later when resetting.
  const [currentCity, setCurrentCity] = useState<City | null>(null); // State to store the current city

  const cities: City[] = [
    { name: 'Paris', lat: 48.8566, lon: 2.3522 },
    { name: 'New York', lat: 40.7128, lon: -74.006 },
    { name: 'London', lat: 51.5074, lon: -0.1278 },
  ];

  async function fetcher(lat: number, lon: number) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`
      );
      if (!response.ok) {
        throw new Error(`Url issue:`);
      }

      const data = await response.json();
      console.log(`Full obj ${data}`);

      return setTemp(data.current.temperature_2m);
    } catch (err) {
      console.error(`${err}: Error getting data from URL`);
    }
  }
  // Handler function for when the user selects a city
  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = cities.find(
      (city) => city.name === e.target.value
    );
    if (selectedCity) {
      setCurrentCity(selectedCity); // Set the current city state
      fetcher(selectedCity.lat, selectedCity.lon); // Fetch weather data for the selected city
    }
  };

  return (
    <article>
      {/* Dropdown to select a city */}
      <select onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <h2>Card Title</h2>
      {/* Display the fetched temperature */}
      <p>{temp}°C</p>
    </article>
  );
}
























  // return (
  //   <article>
  //     <button onClick={fetcher}>Load</button>
  //     <h2>Card Title</h2>
  //     <p>{temp}</p>
  //   </article>
  // );

