import { useState } from 'react';

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



export default function Card() {

  const [temp, setTemp] = useState(null);
  
  async function fetcher() {
    try {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1'
      );
      if (!response.ok) {
        throw new Error('Url issue');
      }

      const data = await response.json();
      console.log(`Full obj ${data}`);
    
      return setTemp(data.current.temperature_2m);

    } catch (err) {
      console.error(`${err}: Error getting data from URL`);
    }
  }

  return (
    <article>
      <button onClick={fetcher}>Load</button>
      <h2>Card Title</h2>
      <p>{ temp }</p>
    </article>
  );
}
