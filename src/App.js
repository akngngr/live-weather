import {useState, useEffect} from 'react';
import './App.css';
import Loading from './components/Loading';
import Weather from './components/Weather';

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
      // setLat(9.9907400);
      // setLong(-83.0359600);
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
        <Loading />
      )
      }
    </div>
  );
}

export default App;
