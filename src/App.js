import {useState, useEffect} from 'react';
import './App.css';
import Weather from './components/Weather';
import { axios } from 'axios';

function App() {
  const [lat, setLat] = useState([]); //latitude
  const [long, setLong] = useState([]); //longitude
  const [data, setData] = useState([]); //weather data

  const API_KEY = process.env.REACT_APP_API_KEY;
 

  let componentMounted = true;

  const fetchData = async () => {
    //Get user location
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      // console.log(lat);
      // console.log(long);
    })

    //API Fetch
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);

    if(componentMounted){
      setData(await response.json());
    }
    return () => {
      componentMounted = false;
    }
  }

  useEffect(() => {
    fetchData();
  }, [lat, long]);

  return (
    <div className="container">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ):(
        <div> Loading ...</div>
      )
      }
    </div>
  );
}

export default App;
