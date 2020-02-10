import React from 'react';
import './App.css';
import Signal from './Signal';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`

const App = () => {
  return (
    <AppContainer>
      <Signal />
    </AppContainer>
  );
}

export default App;
