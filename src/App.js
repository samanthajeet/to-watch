import React from 'react';
import styled from 'styled-components'
import {withRouter} from 'react-router'
import routes from './routes';

import Navigation from './components/Navigation/Navigation'

const AppContainer = styled.div`
box-sizing: border-box;
  /* border: 2px solid green; */
  width: 95vw;
  height: 95vh;
  margin: auto;
  padding: 10%;
  padding-top: 1%;
  ::-webkit-scrollbar {
  width: 6px;
}



`

function App(props) {
  return (
    <AppContainer>
      <Navigation history={props.history} />
      {routes}
    </AppContainer>
  );
  }

export default withRouter(App);
