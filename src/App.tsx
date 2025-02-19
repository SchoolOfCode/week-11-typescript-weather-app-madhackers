import './App.css';
import Input from './components/input/input';
import Title from './components/title/title';
import Card from './components/card.tsx/card';


function App() {
  return (
    <main>
      {/* <h1>{weatherData}</h1> */}
      <Title />
      <Input />
      <Card />
    </main>
  );
}

export default App;
