import React from 'react';
import BodyContainer from './Components/BodyContainer/index';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BodyContainer />
    </React.Fragment>
  );
};

export default App;
