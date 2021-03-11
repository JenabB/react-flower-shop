import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Popular from "./category/Popular";
import Newest from "./category/Newest";
import BestSeller from "./category/BestSeller";

const itemList = () => {
  return (
    <div>
      <Router>
        <div>
          <div className="product-navigation">
            <div>
              <Link to="/">
                <h1>Popular</h1>
              </Link>
            </div>
            <div>
              <Link to="/newest">
                <h1
                  style={{
                    borderRight: "2px solid gray",
                    borderLeft: "2px solid gray",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  Newest
                </h1>
              </Link>
            </div>
            <div>
              <Link to="/best-seller">
                <h1>Best Seller</h1>
              </Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Popular />
            </Route>
            <Route path="/newest">
              <Newest />
            </Route>
            <Route path="/best-seller">
              <BestSeller />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default itemList;
