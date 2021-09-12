import React from 'react';

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
import useTracker from '../../hooks/useTracker';

const BodyContainer = () => {
  const {
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
  } = useTracker();

  // const getData = (e) => {
  //   if (!inputValue || inputValue === '') return;
  // };

  return (
    <>
      <Container>
        <MainContainerTop>
          <MainContainerTopItems>
            <TitleH1>IP Address Tracker</TitleH1>
            <SearchContainer>
              <SearchInput
                placeholder={'Search for any IP address'}
                onChange={(e) => handleChange(e)}
              />
              <SearchIcon onClick={getData} />
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
