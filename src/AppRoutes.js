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
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/:categoryName" component={Category} />
          <Route exact path="/:productName" component={Product} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
