import { useState } from "react";

import "./App.css";
import Input from "./components/input/input";
import Title from "./components/title/title";
import Card from "./components/card.tsx/card";

function App() {
  const [city, setCity] = useState<string>("");

  return (
    <main>
      {/* <h1>{weatherData}</h1> */}
      <Title />
      <Input setCity={setCity} city={city} />
      <Card />
    </main>
  );
}

export default App;

//Passing the setCity function down to input
//inside input, on click of one of the options, setCity is called, and sets the state to the selected option
