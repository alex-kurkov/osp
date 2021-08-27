import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../ui/theme';
import Header from './header';
import { cards } from '../utils/hardcode';
import { useEffect } from 'react';
import { finishRequest, startRequest } from '../services/reducers/api/apiSlice';
import { addGoods } from '../services/reducers/cart/cartSlice';
import Main from './main';

const StyledApp = styled.div`
  background-color: ${p => p.theme.colors.background};
`;

const App = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state)
  const { apiRequestInProgress } = useSelector((state) => state.api)

  useEffect(() => {
    //api mock
    dispatch(startRequest());
    setTimeout(() => {
      dispatch(addGoods(cards))
      dispatch(finishRequest())
    }, 5000)
  }, [dispatch])


  return (
    <ThemeProvider theme={theme.active === 'light' ? LightTheme : DarkTheme}>
      <StyledApp>
        <Header />
        <Main />
        { apiRequestInProgress && <span>Loading.........</span> }
      </StyledApp>
    </ThemeProvider>
  )
};

export default App;
