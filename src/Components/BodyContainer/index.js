import React, { useState } from 'react';

import {
  MainContainerTopItems,
  MainContainerTop,
  TitleH1,
  SearchInput,
  MainContainerBottom,
  SearchContainer,
  SearchIcon,
  Container,
  MainContainerBottomItems,
  DataContainer,
  BottomIcon,
} from './BodyContainerItems';

import { DataEntry } from '../DataEntry/DataEntry';

const BodyContainer = () => {
  const [searchInput, setSearchInput] = useState({
    searchInput: '',
  });

  const [timezone, setTimezone] = useState('');
  const [city, setCity] = useState('Please Enter Search');
  const [region, setRegion] = useState('');
  const [postalcode, setPostalCode] = useState('');
  const [isp, setIsp] = useState('Please Enter Search');
  const [userIp, setUserIp] = useState('Please Enter Search');

  // API DATA CALL HANDLER

  const getData = async (e) => {
    if (searchInput === '') {
      alert('Please Enter a location');
    }

    const URL_PATH = `
      https://geo.ipify.org/api/v1?apiKey=at_n7KZsfggQnIAEce406OJbCzW488XO&ipAddress=${searchInput}`;
    const api_call = await fetch(URL_PATH);
    const response = await api_call.json();

    if (!response || response.length === 0) {
      alert('Invalid IP Address');
    }

    setUserIp(response.ip);
    setCity(response.location.city);
    setRegion(response.location.region);
    setPostalCode(response.location.postalCode);
    setTimezone(response.location.timezone);
    setIsp(response.isp);
  };

  return (
    <>
      <Container>
        <MainContainerTop>
          <MainContainerTopItems>
            <TitleH1>IP Address Tracker</TitleH1>
            <SearchContainer>
              <SearchInput
                placeholder={'Search for any IP address'}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <SearchIcon
                onClick={getData}
                onKeyDown={(e) => (e.code === 'Enter' ? getData : null)}
              />
            </SearchContainer>
            <DataContainer>
              <DataEntry title={'Ip Address'} data={userIp} />
              <DataEntry
                title={'Location'}
                city={city}
                region={region}
                postalcode={postalcode}
              />
              <DataEntry title={'Timezone'} text={'UTC'} data={timezone} />
              <DataEntry title={'Isp'} data={isp} />
            </DataContainer>
          </MainContainerTopItems>
        </MainContainerTop>
        <MainContainerBottom>
          <MainContainerBottomItems>
            <BottomIcon></BottomIcon>
          </MainContainerBottomItems>
        </MainContainerBottom>
      </Container>
    </>
  );
};

export default BodyContainer;
