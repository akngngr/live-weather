import React from 'react'

const Weather = ({weatherData}) => {
  const refresh = () => {
    window.location.reload()
  }

  //Temperature conversion from Kelvin to C and F
  let tempC = (weatherData.main.temp - 273.15).toFixed(2);
  let mintempC = (weatherData.main.temp_min - 273.15).toFixed(2);
  let maxtempC = (weatherData.main.temp_max - 273.15).toFixed(2);
  let tempF = ((weatherData.main.temp - 273.15)*1.8 + 32).toFixed(2);
  let mintempF = ((weatherData.main.temp_min - 273.15)*1.8 + 32).toFixed(2);
  let maxtempF = ((weatherData.main.temp_max - 273.15)*1.8 + 32).toFixed(2);
  
  var d = new Date();

  var date = d.getDate();
  var year = d.getFullYear();
  var month = d.toLocaleString('default', {month: 'long'});
  var day = d.toLocaleString('default', {weekday: 'long'});


  return (
    <>
      <div className="container mt-5 text-muted">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-grey bg-dark mb-3  border border-white shadow-lg text-center">
              <div className="card-header fw-light text-white">
                Live Weather
                <i
                  className="fa fa-refresh d-flex justify-content-end pt-2 text-success fw-light"
                  onClick={refresh}
                ></i>
              </div>
              <div className="card-body">
                <h5 className="card-title h2 fw-bold text-white text-uppercase">{weatherData.name}</h5>
                <p className="card-text h6 mt-5 mb-5">
                  {day}, {month} {date}, {year}
                </p>
                <hr className="text-white" />
                <h1 className="display-5 fw-normal text-white mb-5 mt-5">{tempC}&deg;C | {tempF}&deg;F</h1>
                <p className="h3 fw-normal text-info mb-4">Min: {mintempC}&deg;C | {mintempF}&deg;F</p>
                <p className="h3 fw-normal text-warning">Max: {maxtempC}&deg;C | {maxtempF}&deg;F</p>
                <p className="lead mt-5">{weatherData.weather[0].main}</p>
                <p className="lead">Humidity: {weatherData.main.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather
