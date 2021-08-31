import React from 'react';

import {
  MainContainerTopContainer,
  MainContainerTop,
  TitleH1,
  SearchInput,
  MainContainerBottom,
} from './BodyContainerItems';

function BodyContainer() {
  return (
    <>
      <MainContainerTopContainer>
        <MainContainerTop>
          <TitleH1>IP Address Tracker</TitleH1>
          <SearchInput></SearchInput>
        </MainContainerTop>
      </MainContainerTopContainer>
      <MainContainerBottom></MainContainerBottom>
    </>
  );
}

export default BodyContainer;
