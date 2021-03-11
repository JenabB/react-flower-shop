import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
const Profile = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div>
      <h1>Don't have an account ?</h1>
      <Router>
        <div>
          <div className="product-navigation">
            <div>
              <Link to="/">
                <h1>Popular</h1>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <h1>Register</h1>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <h1>Login</h1>
              </Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <h1>Yare</h1>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Profile;
