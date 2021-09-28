import React, { useState } from 'react';

// import { useGeoLocation } from './Geolocation';

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

// 'https://api.ipify.org?format=jsonp&callback=getIP';

// function getIp(json) {
// console.log(json.ip);
// }

const BodyContainer = () => {
  const [searchInput, setSearchInput] = useState('');

  const [userIpData, setUserIpData] = useState(null);

  // const geolocation = useGeoLocation();

  // useEffect(() => {
  //   getData();
  // }, []);

  // API DATA CALL HANDLER

  const getData = async () => {
    if (searchInput === '') {
      alert('Please Enter IP Address');
      return;
    }

    const URL_PATH = `
      https://geo.ipify.org/api/v1?apiKey=at_n7KZsfggQnIAEce406OJbCzW488XO&ipAddress=${searchInput}`;
    const api_call = await fetch(URL_PATH);
    const response = await api_call.json();

    console.log(response);

    if (!response || response.length === 0) {
      alert('Invalid IP Address');
    }

    setUserIpData(response);
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
                onClick={() => getData()}
                onKeyPress={(e) => (e.key === 'Enter' ? getData : null)}
              />
            </SearchContainer>

            {userIpData !== null ? (
              <div>
                <DataContainer>
                  <DataEntry title={'Ip Address'} data={userIpData.ip} />
                  <DataEntry
                    title={'Location'}
                    data={
                      userIpData.location.city +
                      userIpData.location.region +
                      userIpData.location.postalcode
                    }
                  />
                  <DataEntry
                    title={'Timezone'}
                    text={'UTC'}
                    data={userIpData.location.timezone}
                  />
                  <DataEntry title={'Isp'} data={userIpData.isp} />
                </DataContainer>
              </div>
            ) : (
              <DataContainer>Enter an IP Address</DataContainer>
            )}
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
