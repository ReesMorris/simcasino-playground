import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sidebar from './components/sidebar';
import Wrapper from './components/wrapper';
import Main from './components/main';
import GlobalStyle from './styles';
import { light } from './themes';
import Footer from './components/footer';
import PageWrapper from './components/page-wrapper';
import './utils/font-awesome';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Wrapper>
        <PageWrapper>
          <Main />
          <Sidebar />
        </PageWrapper>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
