import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../ui/theme';
import { useEffect } from 'react';
import { getGoods } from '../services/actions/api';
import Header from './header';
import Main from './main';
import Loader from './loader';
import { useLocalStorage } from '../utils/hooks';
import { setChosen } from '../services/reducers/cart/cartSlice';
import { setTheme } from '../services/reducers/theme/themeSlice';

const StyledApp = styled.div`
  background-color: ${p => p.theme.colors.background};
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  const { goods, chosen } = useSelector(store => store.cart);
  const { apiRequestInProgress } = useSelector((state) => state.api)
  const [ savedChosen, setSavedChosen ] = useLocalStorage('chosen', []);
  const [ savedTheme, setSavedTheme ] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    if (savedTheme.active) dispatch(setTheme(savedTheme.active));
    if (savedChosen.length > 0) dispatch(setChosen(savedChosen));
    dispatch(getGoods());
  }, [dispatch])

  useEffect(() => {
    if (chosen?.length) {
      setSavedChosen(chosen);
    } else {
      setSavedChosen([]);
    } 
  }, [chosen])

  useEffect(() => {
    setSavedTheme(theme);
  }, [theme])

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
