import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './views/papes/Login'
import DefaultLayout from './views/layouts/DefaultLayout';
import PrivateRoute from './views/share_component/PrivateRoute'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/page404">Page not found</Route>
           <PrivateRoute>
              <DefaultLayout />
           </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
