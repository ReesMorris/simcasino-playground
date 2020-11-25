import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sidebar from './components/sidebar';
import Wrapper from './components/wrapper';
import Main from './components/main';
import GlobalStyle from './styles';
import { light } from './themes';
import Footer from './components/footer';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Wrapper>
        <Main />
        <Sidebar />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
