import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Cart from './pages/Cart';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade-drop" key={location.key}>
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:categoryName">
            <Category />
          </Route>
          <Route exact path="/:productName">
            <Product />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
