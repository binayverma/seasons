import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat({ lat: position.coords.latitude }),
      err => setErrorMessage({ errorMessage: err.message })
    )
  }, []);

  return [lat, errorMessage];
}