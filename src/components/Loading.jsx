import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <div className="w-100 h-100 text-muted d-flex justify-content-center align-items-center mt-5 pt-5">
      <h2>Loading Live Forecast...</h2>
      <FontAwesomeIcon icon={faBolt} className="d-flex text-warning px-2 fa-3x" />
    </div>
  )
}

export default Loading;
