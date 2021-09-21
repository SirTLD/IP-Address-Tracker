import { useState } from 'react';

export const useGeoLocation = () => {
  const [geolocation, setGeoLocation] = useState({
    loaded: false,
    coordinates: {
      lat: '',
      lng: '',
    },
  });

  const success = (location) => {
    setGeoLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const error = (error) => {
    setGeoLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      error({
        code: 0,
        message: 'Geolocation not supported',
      });

      setGeoLocation((state) => ({
        ...state,
        loaded: true,
        error: {
          code: 0,
          message: 'Geolocation not supported',
        },
      }));
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return geolocation;
};
