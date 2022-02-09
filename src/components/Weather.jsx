import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate,faCloud,faSun, faCloudRain, faSnowflake, faPooStorm, faTemperatureLow, faTemperatureHigh, faWater } from '@fortawesome/free-solid-svg-icons'

const Weather = ({ weatherData }) => {
  const refresh = () => {
    window.location.reload()
  }

  //Temperature conversion from Kelvin to C and F
  let tempC = (weatherData.main.temp - 273.15).toFixed(2)
  let mintempC = (weatherData.main.temp_min - 273.15).toFixed(2)
  let maxtempC = (weatherData.main.temp_max - 273.15).toFixed(2)
  let tempF = ((weatherData.main.temp - 273.15) * 1.8 + 32).toFixed(2)
  let mintempF = ((weatherData.main.temp_min - 273.15) * 1.8 + 32).toFixed(2)
  let maxtempF = ((weatherData.main.temp_max - 273.15) * 1.8 + 32).toFixed(2)

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
            <div className="card text-grey bg-dark mb-3  border border-white shadow-lg text-center">
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
                <h5 className="card-title h1 fw-bold text-warning text-uppercase">
                  {weatherData.name}
                </h5>
                <p className="card-text h6 mt-5 mb-5">
                  {day}, {month} {date}, {year}
                </p>
                <hr className="text-white" />
                <h1 className="display-5 fw-normal text-white mb-5 mt-5">
                  {tempC}&deg;C | {tempF}&deg;F
                </h1>
                <p className="h3 fw-light mb-4">
                  <FontAwesomeIcon icon={faTemperatureLow} className="px-3 text-info" /> {mintempC}&deg;C | {mintempF}&deg;F
                </p>
                <p className="h3 fw-light pt-4">
                    <FontAwesomeIcon icon={faTemperatureHigh} className="px-3 text-danger" /> {maxtempC}&deg;C | {maxtempF}&deg;F
                </p>
                <p className="lead mt-5">
                  {weatherData.weather[0].main}
                  {
                    {
                      Clear: (
                        <FontAwesomeIcon icon={faSun} className="d-flex w-100 text-warning py-3 justify-content-center fa-2x" />
                      ),
                      Clouds: (
                        <FontAwesomeIcon icon={faCloud} className="d-flex w-100 text-white py-3 justify-content-center fa-2x" />
                      ),
                      Rain: (
                        <FontAwesomeIcon icon={faCloudRain} className="d-flex w-100 text-info py-3 justify-content-center fa-2x" />
                      ),
                      Snow: (
                        <FontAwesomeIcon icon={faSnowflake} className="d-flex w-100 text-white py-3 justify-content-center fa-2x" />
                      ),
                      Extreme: (
                        <FontAwesomeIcon icon={faPooStorm} className="d-flex w-100 text-danger py-3 justify-content-center fa-2x" />
                      ),
                    }[weatherData.weather[0].main]
                  }
                </p>
                <p className="d-flex justify-content-center h4" alt="Humidity">
                <FontAwesomeIcon icon={faWater} className="px-2 fa-lg text-primary"  /> {weatherData.main.humidity}%
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
