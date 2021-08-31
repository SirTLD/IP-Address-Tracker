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
} from './BodyContainerItems';

function BodyContainer() {
  return (
    <>
      <Container>
        <MainContainerTop>
          <MainContainerTopItems>
            <TitleH1>IP Address Tracker</TitleH1>
            <SearchContainer>
              <SearchInput
                placeholder={'Search for any IP address or domain'}
              />
              <SearchIcon />
            </SearchContainer>
          </MainContainerTopItems>
        </MainContainerTop>
        <MainContainerBottom></MainContainerBottom>
      </Container>
    </>
  );
}

export default BodyContainer;
