import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../ui/theme';
import { useEffect } from 'react';
import { getGoods } from '../services/actions/api';
import Header from './header';
import Main from './main';
import Loader from './loader';

const StyledApp = styled.div`
  background-color: ${p => p.theme.colors.background};
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  const { goods } = useSelector(store => store.cart);
  const { apiRequestInProgress } = useSelector((state) => state.api)

  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme.active === 'light' ? LightTheme : DarkTheme}>
      <StyledApp>
        <Header />
        { !!goods.length && <Main goods={goods}/>}
        { apiRequestInProgress && <Loader /> }
      </StyledApp>
    </ThemeProvider>
  )
};

export default App;
