import React, { useState } from 'react';
import { BarLoader } from 'react-spinners';

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
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [userIpData, setUserIpData] = useState(null);

  // API DATA CALL HANDLER

  const getData = async () => {
    if (searchInput === '') {
      alert('Please Enter IP Address');
      return;
    }

    setLoading(true);
    try {
      const URL_PATH = `
      https://geo.ipify.org/api/v1?apiKey=at_n7KZsfggQnIAEce406OJbCzW488XO&ipAddress=${searchInput}`;
      const api_call = await fetch(URL_PATH);
      const response = await api_call.json();

      console.log(response);

      if (!response || response.length === 0) {
        alert('Invalid IP Address');
      }

      setUserIpData(response);
      setLoading(false);
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  };

  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  
  `;

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
                onKeyPress={(e) => (e.key === 'Enter' ? getData() : null)}
              />
              <SearchIcon onClick={() => getData()} />
            </SearchContainer>

            {isError && <DataContainer>Enter a Valid IP Address</DataContainer>}

            {loading ? (
              <DataContainer>
                <BarLoader
                  css={override}
                  size={200}
                  color={'black'}
                  loading={loading}
                />
              </DataContainer>
            ) : (
              <>
                {userIpData !== null ? (
                  <div>
                    <DataContainer>
                      <DataEntry title={'Ip Address'} data={userIpData.ip} />
                      <DataEntry
                        title={'Location'}
                        data={`${userIpData.location.city} , 
                      ${userIpData.location.region}, 
                      ${userIpData.location.postalCode}`}
                      />
                      <DataEntry
                        title={'Timezone'}
                        data={`UTC ${userIpData.location.timezone}`}
                      />
                      <DataEntry title={'Isp'} data={userIpData.isp} />
                    </DataContainer>
                  </div>
                ) : (
                  <DataContainer>Enter an IP Address</DataContainer>
                )}
              </>
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
