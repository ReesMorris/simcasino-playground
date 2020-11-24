import React from 'react';
import { ThemeProvider } from 'styled-components';
import FileDrop from './components/file-drop';
import GlobalStyle from './styles';
import { light } from './themes';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <FileDrop />
    </ThemeProvider>
  );
};

export default App;
