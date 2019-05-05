import React from 'react';
import styled from 'styled-components'
import routes from './routes'

import './App.css';

const AppContainer = styled.div`
box-sizing: border-box;
  border: 2px solid green;
  width: 95vw;
  height: 95vh;
  margin: auto;
  padding: 10%;

`

function App() {
  return (
    <AppContainer>
      {routes}
    </AppContainer>
  );
  }

export default App;
