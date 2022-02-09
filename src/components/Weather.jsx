import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate,faCloud,faSun, faCloudRain, faSnowflake, faPooStorm, faTemperatureLow, faTemperatureHigh, faWater, faCloudShowersHeavy, faWind, faBacon } from '@fortawesome/free-solid-svg-icons'

const Weather = ({ weatherData }) => {
  const refresh = () => {
    window.location.reload()
  }

  //Temperature conversion from Kelvin to C and F
  let tempC = (weatherData.main.temp - 273.15).toFixed(0)
  let mintempC = (weatherData.main.temp_min - 273.15).toFixed(0)
  let maxtempC = (weatherData.main.temp_max - 273.15).toFixed(0)
  let tempF = ((weatherData.main.temp - 273.15) * 1.8 + 32).toFixed(0)
  let mintempF = ((weatherData.main.temp_min - 273.15) * 1.8 + 32).toFixed(0)
  let maxtempF = ((weatherData.main.temp_max - 273.15) * 1.8 + 32).toFixed(0)
  let feelsLikeC = (weatherData.main.feels_like - 273.15).toFixed(0)
  let feelsLikeF = ((weatherData.main.feels_like - 273.15) * 1.8 + 32).toFixed(0)

  var d = new Date()

  var date = d.getDate()
  var year = d.getFullYear()
  var month = d.toLocaleString('default', { month: 'long' })
  var day = d.toLocaleString('default', { weekday: 'long' })

  return (
    <>
      <div className="container mt-5 text-muted">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-grey bg-dark mb-3  border border-success shadow-lg text-center">
              <div className="card-header d-flex justify-content-center fw-light text-white">
                <div className="d-flex justify-content-center position-absolute">
                    <h4>Live Weather</h4>
                </div>
                <div className="bg-dark d-flex w-100 justify-content-end align-items-end cursor-pointer">
                <FontAwesomeIcon
                  icon={faRotate}
                  className="btn btn-success px-2 fa-xl"
                  onClick={refresh}
                />
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title h1 d-flex justify-content-center fw-bold text-warning text-uppercase">
                  {weatherData.name}
                </h5>
                <h3>{weatherData.sys.country}</h3>
                <p className="card-text h5 mt-5 mb-5 text-white">
                  {day}, {month} {date}, {year}
                </p>
                <hr className="text-white" />
                <h1 className="display-5 fw-normal text-white mb-5 mt-5">
                  {tempC}&deg;C | {tempF}&deg;F
                </h1>
                
                <h2 className="mb-5 text-white h3">
                <FontAwesomeIcon icon={faBacon} className="text-success px-2 fa-sm" style={{rotate: '225deg'}} alt="Feels like" />
                {feelsLikeC}&deg;C | {feelsLikeF}&deg;F
                </h2>
                <p className="h3 fw-light mb-4">
                  <FontAwesomeIcon icon={faTemperatureLow} className="px-3 text-info" />{mintempC}&deg;C | {mintempF}&deg;F
                </p>
                <p className="h3 fw-light">
                    <FontAwesomeIcon icon={faTemperatureHigh} className="px-3 text-danger" />{maxtempC}&deg;C | {maxtempF}&deg;F
                </p>
                <p className="text-uppercase text-white h4 mt-5">
                  {weatherData.weather[0].description}
                  {
                    {
                      Clear: (
                        <FontAwesomeIcon icon={faSun} className="d-flex w-100 text-warning py-3 justify-content-center fa-2x" />
                      ),
                      Clouds: (
                        <FontAwesomeIcon icon={faCloud} className="d-flex w-100 text-white py-3 justify-content-center fa-2x" />
                      ),
                      Drizzle: (
                        <FontAwesomeIcon icon={faCloudRain} className="d-flex w-100 text-info py-3 justify-content-center fa-2x" />
                      ),
                      Rain: (
                        <FontAwesomeIcon icon={faCloudShowersHeavy} className="d-flex w-100 text-info py-3 justify-content-center fa-2x" />
                      ),
                      Snow: (
                        <FontAwesomeIcon icon={faSnowflake} className="d-flex w-100 text-white py-3 justify-content-center fa-2x" />
                      ),
                      Thunderstorm: (
                        <FontAwesomeIcon icon={faPooStorm} className="d-flex w-100 text-danger py-3 justify-content-center fa-2x" />
                      ),
                      default: (
                        <FontAwesomeIcon icon={faCloud} className="d-flex w-100 text-danger py-3 justify-content-center fa-2x" />
                        ),
                    }[weatherData.weather[0].main]
                  }
                </p>
                <p className="d-flex justify-content-center h4" alt="Humidity">
                <FontAwesomeIcon icon={faWater} className="px-2 fa-lg text-primary"  />{weatherData.main.humidity}%
                </p>
                <p className="d-flex justify-content-center h4 mt-4" alt="Humidity">
                <FontAwesomeIcon icon={faWind} className="px-2 fa-lg text-muted" style={{rotate: '180deg'}}  />{weatherData.wind.speed}m/s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather
