import React, { useState, useEffect } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat({ lat: position.coords.latitude }),
      err => setErrorMessage({ errorMessage: err.message })
    )
  }, []);

  let content;
  if(errorMessage) {
    content = <div>Error: {this.state.errorMessage}</div>;
  } else if(lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
}

export default App;
