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
  DataValue,
  DataTitleH2,
  DataContainerDiv,
  BottomIcon,
} from './BodyContainerItems';

// import DataEntry from './Components/DataSection';
function BodyContainer() {
  const privateKey = process.env.REACT_API_KEY;
  const urlPath = `'https://geo.ipify.org/api/v1?apiKey=${privateKey}&ipAddress=8.8.8.8'`;
  // const urlPath = `'https://geo.ipify.org/api/v1?apiKey=at_n7KZsfggQnIAEce406OJbCzW488XO&ipAddress=8.8.8.8'`;

  // const getData = () => {
  //   fetch(urlPath)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  // getData();

  return (
    <>
      <Container>
        <MainContainerTop>
          <MainContainerTopItems>
            <TitleH1>IP Address Tracker</TitleH1>
            <SearchContainer>
              <SearchInput
                placeholder={'Search for any IP address or domain'}
                id={'dataEntry'}
              />
              <SearchIcon />
            </SearchContainer>
            <DataContainer>
              <DataEntry title={'Ip Address'} data={'000.000.000.000'} />
              <DataEntry title={'Location'} data={'Brooklyn, NY 10001'} />
              <DataEntry title={'Timezone'} data={'UTC-05:00'} />
              <DataEntry title={'Isp'} data={'SpaceX Starlink'} />
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
}

function DataEntry({ title, data }) {
  return (
    <>
      <DataContainerDiv>
        <DataTitleH2>{title}</DataTitleH2>
        <DataValue>{data}</DataValue>
      </DataContainerDiv>
    </>
  );
}

export default BodyContainer;
