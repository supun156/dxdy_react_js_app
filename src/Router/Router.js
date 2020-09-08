import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Profile from "../Components/Profile";
import Login from "../Components/Login";

const CreateRoutes = () => (
  <Router>
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={Profile} />
  </Router>
);

export default CreateRoutes;
