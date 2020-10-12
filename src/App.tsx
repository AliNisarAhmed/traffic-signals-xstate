import React from 'react';
import './App.css';
import styled from 'styled-components';
import View from './components/View';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`

const App = () => {
  return (
    <AppContainer>
      <View />
    </AppContainer>
  );
}

export default App;
