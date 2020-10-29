import React from 'react';
import Header from '../components/Header/Header';
import styled, { createGlobalStyle } from 'styled-components';
import logo from '../logo.png';
import Profile from './Profile';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        <Header logo={logo} />  
        <Profile />
      </AppWrapper>
    </>
  );
}

export default App;
