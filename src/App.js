import * as ROUTES from './constant/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Browse, Signin, Signup }from './pages';
import { IsUserRedirect, PrivateRoute } from './helpers/routes';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.SIGN_UP} element={
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} exact >
          <Signup />
          </IsUserRedirect>
        } />
        <Route path={ROUTES.SIGN_IN} element={
          <IsUserRedirect loggedInPath={ROUTES.BROWSE} exact>
          <Signin />
          </IsUserRedirect>
        } />
        <Route path={ROUTES.HOME} element={
          <IsUserRedirect loggedInPath={ROUTES.BROWSE} exact>
            <Home />
          </IsUserRedirect>
        } />
        <Route path={ROUTES.BROWSE} element={
          <PrivateRoute loggedInPath={ROUTES.SIGN_IN} exact>
          <Browse />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}