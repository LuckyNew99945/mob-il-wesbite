import {useState} from 'react';
import './App.css';
import mark1f from './img/mob-il mark-1-f.png';
import Header from './components/Header';
import Main from './components/Main';
function App() {

  const data = [
    {
      "name": "mark-1",
      "image_url": mark1f,
      "acceleration" : 7.0,
      "speed": 200,
      "capacity": 15
    },
    {
      "name": "mark-2",
      "image_url": "../img/mob-il mark-2.png",
      "acceleration" : 5.0,
      "speed": 220,
      "capacity": 14
    },
    {
      "name": "mark-3",
      "image_url": "../img/mob-il mark-3.png",
      "acceleration" : 5.0,
      "speed": 220,
      "capacity": 17
    }
  ]



  const [cars, setCars] = useState(data[0]);
  const [id, setData] = useState(0);
  

  
  return (
    <div>
      <Header/>
      <Main id={id} setData={setData} cars={cars} setCars={setCars}/>
    </div>
  );
}

export default App;
