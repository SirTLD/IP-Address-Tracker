import React, { useState } from 'react';
import { BarLoader, PropagateLoader } from 'react-spinners';

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
  // BottomIcon,
} from './BodyContainerItems';

import { DataEntry } from '../DataEntry/DataEntry';
import { config } from '../../config/config';
import Map from '../Map';

const BodyContainer = () => {
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [userIpData, setUserIpData] = useState(null);

  // API DATA CALL HANDLER

  const getData = async () => {
    if (searchInput === '') {
      alert('Please Enter IP Address');
      return;
    }

    setLoading(true);
    try {
      const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';

      const URL_PATH = `
      ${CROSS_DOMAIN}/https://geo.ipify.org/api/v1?apiKey=${config.ipAddressKey}&ipAddress=${searchInput}&domain=${searchInput}`;
      const api_call = await fetch(URL_PATH);
      const response = await api_call.json();

      if (
        !response ||
        response.length === 0 ||
        response.code === 422 ||
        response.code === 400
      ) {
        setLoading(false);
        setIsError(response.messages);
        setUserIpData(null);
        return;
      }

      setUserIpData(response);

      setLoading(false);
      setIsError('');
    } catch (err) {
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
                placeholder={'Search for any IP address or domain'}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' ? getData() : null)}
              />
              <SearchIcon onClick={() => getData()} />
            </SearchContainer>

            {isError ? <DataContainer>{isError}</DataContainer> : ''}

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
                {userIpData && (
                  <>
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
                  </>
                )}
              </>
            )}
          </MainContainerTopItems>
        </MainContainerTop>

        {loading ? (
          <MainContainerBottom>
            <PropagateLoader
              css={override}
              size={13}
              color={'black'}
              loading={loading}
            />
          </MainContainerBottom>
        ) : (
          <>
            {userIpData ? (
              <>
                <MainContainerBottom>
                  <Map
                    lat={userIpData.location.lat}
                    lng={userIpData.location.lng}
                  />
                </MainContainerBottom>
              </>
            ) : (
              <MainContainerBottom>
                <MainContainerBottomItems></MainContainerBottomItems>
              </MainContainerBottom>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default BodyContainer;
