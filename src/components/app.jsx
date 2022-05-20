import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../ui/theme';
import { useEffect } from 'react';
import { getGoods, getBeverages } from '../services/actions/api';
import { Header, Loader, NavigationSideMenu, Footer, Notifications } from '.'
import { useLocalStorage } from '../utils/hooks';
import { setChosen } from '../services/reducers/cart/cartSlice';
import { setTheme } from '../services/reducers/theme/themeSlice';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import {
  MenuPage,
  TipsPage,
  BarListPage
 } from '../pages'

const StyledApp = styled.div`
  background-color: ${p => p.theme.colors.background};
  width: 100%;
  height: 100vh;
  `;
const AppWrap = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`

const App = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store);
  const { goods, chosen } = useSelector(store => store.cart);
  const { apiRequestInProgress } = useSelector((store) => store.api)
  const [ savedChosen, setSavedChosen ] = useLocalStorage('chosen', []);
  const [ savedTheme, setSavedTheme ] = useLocalStorage('theme', 'dark');
  let location = useLocation();

  useEffect(() => {
    if (savedTheme.active) dispatch(setTheme(savedTheme.active));
    if (savedChosen.length > 0) dispatch(setChosen(savedChosen));
    dispatch(getGoods());
    dispatch(getBeverages());
    // eslint-disable-next-line
  }, [dispatch])

  useEffect(() => {
    setSavedChosen(chosen);
    // eslint-disable-next-line
  }, [chosen])

  useEffect(() => {
    setSavedTheme(theme);
    // eslint-disable-next-line
  }, [theme])

  return (
    <ThemeProvider theme={theme.active === 'light' ? LightTheme : DarkTheme}>
      <StyledApp>
        <AppWrap>
          <Notifications />
          { apiRequestInProgress && <Loader /> }
          <Header />
          <NavigationSideMenu />
          {!!goods.length &&
              <Switch location={location}>
                {/* <Route exact path="/" component={MenuPage} /> */}
                <Route exact path="/menu" component={MenuPage} />
                <Route exact path="/bar" component={BarListPage} />
                <Route exact path="/service" component={TipsPage} />
                <Route path="*" render={() => <Redirect to="/menu" />} />
              </Switch>
          }
          <Footer />
        </AppWrap>
      </StyledApp>
    </ThemeProvider>
  )
};

export default App;
