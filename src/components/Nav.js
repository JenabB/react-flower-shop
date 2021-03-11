import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pages/home";
import Cart from "../pages/cart";
import Chat from "../pages/chat";
import Scan from "../pages/scan";
import Account from "../pages/account";

import home from "../assets/icons/home.svg";
import chat from "../assets/icons/chat-2.svg";
import scan from "../assets/icons/scan.svg";
import cart from "../assets/icons/cart-2.svg";
import account from "../assets/icons/user.svg";

export default function Nav() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/scan">
            <Scan />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>

        <div className="bottom-navigation">
          <div className="left-nav">
            <div>
              <Link to="/">
                <img src={home} alt="home icon" />
              </Link>
            </div>
            <div>
              <Link to="/chat">
                <img src={chat} alt="home icon" />
              </Link>
            </div>
          </div>

          <div className="scan-icon">
            <Link to="/scan">
              <img src={scan} alt="scan icon" />
            </Link>
          </div>
          <div className="right-nav">
            <div>
              <Link to="/cart">
                <img src={cart} alt="cart icon" />
              </Link>
            </div>
            <div>
              <Link to="/account">
                <img src={account} alt="user icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
