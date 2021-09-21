import { useState } from 'react';

// const PRIVATE_KEY = process.env.REACT_API_KEY;
// const URL_PATH = `http://api.ipstack.com/134.201.250.155?access_key=${PRIVATE_KEY}`;

// const URL_PATH = `http://api.ipstack.com/134.201.250.155?access_key=4095c7eae02b7505d3780b2e8bd53edf`;
export const useTracker = () => {
  const [searchInput, setSearchInput] = useState({
    searchInput: '',
  });
  const [timezone, setTimezone] = useState('');
  const [city, setCity] = useState('Please Enter Search');
  const [region, setRegion] = useState('');
  const [postalcode, setPostalCode] = useState('');
  const [isp, setIsp] = useState('Please Enter Search');
  const [userIp, setUserIp] = useState('Please Enter Search');
  const [apiData, setApiData] = useState([]);

  // HANDLE CHANGE EVENT HANDLER

  const handleChange = (e) => {
    let searchInput = e.target.value;
    if (searchInput !== null) {
      setSearchInput(searchInput);
    }
    console.log(searchInput);
  };

  // API DATA CALL HANDLER
  //   //API CALL
  const getData = async (e) => {
    if (searchInput === '') {
      alert('Please Enter a location');
    }
    // const API_KEY = process.env.REACT_GEO_KEY;
    // const URL_PATH = `
    //  https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${searchInput}`;
    const URL_PATH = `
      https://geo.ipify.org/api/v1?apiKey=at_n7KZsfggQnIAEce406OJbCzW488XO&ipAddress=${searchInput}`;
    const api_call = await fetch(URL_PATH);
    const response = await api_call.json();
    setApiData(response);
    // if (!response || response.length === 0) {
    //   alert('Invalid IP Address');
    // }
    setUserIp(response.ip);
    setCity(response.location.city);
    setRegion(response.location.region);
    setPostalCode(response.location.postalCode);
    setTimezone(response.location.timezone);
    setIsp(response.isp);
  };
  return {
    region,
    timezone,
    isp,
    city,
    postalcode,
    userIp,
    handleChange,
    setIsp,
    getData,
    setCity,
    setRegion,
    setPostalCode,
    setUserIp,
  };
};
