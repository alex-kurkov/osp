import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../ui/theme';
import { useEffect } from 'react';
import { getGoods } from '../services/actions/api';
import { Header, Loader, NavigationSideMenu } from '.'
import { useLocalStorage } from '../utils/hooks';
import { setChosen } from '../services/reducers/cart/cartSlice';
import { setTheme } from '../services/reducers/theme/themeSlice';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router';
import {
  HomePage,
  MenuPage,
  TipsPage
 } from '../pages'


const StyledApp = styled.div`
  background-color: ${p => p.theme.colors.background};
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store);
  const { goods, chosen } = useSelector(store => store.cart);
  const { apiRequestInProgress } = useSelector((store) => store.api)
  const [ savedChosen, setSavedChosen ] = useLocalStorage('chosen', []);
  const [ savedTheme, setSavedTheme ] = useLocalStorage('theme', 'dark');
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    if (savedTheme.active) dispatch(setTheme(savedTheme.active));
    if (savedChosen.length > 0) dispatch(setChosen(savedChosen));
    dispatch(getGoods());
  }, [])

  useEffect(() => {
    setSavedChosen(chosen);
  }, [chosen])

  useEffect(() => {
    setSavedTheme(theme);
  }, [theme])

  return (
    <ThemeProvider theme={theme.active === 'light' ? LightTheme : DarkTheme}>
      <StyledApp>
        { apiRequestInProgress && <Loader /> }
        <Header />
        <NavigationSideMenu />
        {!!goods.length &&
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/menu" component={MenuPage} />
              <Route exact path="/bar" render={()=> (<div><a style={{color: 'red', fontSize: '40px'}} onClick={() => history.goBack()}>НАЗАД </a></div>)} />
              <Route exact path="/service" component={TipsPage} />
              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
        }
      </StyledApp>
    </ThemeProvider>
  )
};

export default App;
