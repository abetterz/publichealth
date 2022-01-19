import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../components/auth";
import Dashboard from "../components/dashboard";
import PrivateRoute from "./private";
import { read } from "../redux/actions/master";
import { connect } from "react-redux";

import BusinessMembers from "../components/pages/business_members";
import Events from "../components/pages/events";
import Finance from "../components/pages/finance";
import Message from "../components/pages/message";
import Settings from "../components/pages/settings";
import Profile from "../components/pages/profile";
import API from "../components/pages/api";
import Help from "../components/pages/help";
import POS from "../components/pages/pos";

function AppRoute(props) {
  const initialFetch = async () => {
    let isonboard = await props.read({
      key: "isonboard",
      replace: true,
    });
    await props.read({
      key: "my_api",
      replace: true,
    });
  };

  useEffect(() => {
    initialFetch();
  }, []);

  console.log(props, "logout_onboard");

  return (
    <div>
      <Route>
        <Switch>
          <PrivateRoute
            component={Dashboard}
            path="/dashboard/:section"
            {...props}
          />
          <PrivateRoute
            component={BusinessMembers}
            path="/members/:section"
            {...props}
          />
          <PrivateRoute component={Events} path="/events/:section" {...props} />
          <PrivateRoute
            component={Finance}
            path="/finance/:section"
            {...props}
          />
          <PrivateRoute
            component={Message}
            path="/message/:section"
            {...props}
          />
          <PrivateRoute
            component={Settings}
            path="/settings/:section"
            {...props}
          />
          <PrivateRoute
            component={Profile}
            path="/profile/:section"
            {...props}
          />
          <PrivateRoute component={API} path="/api/:section" {...props} />
          <PrivateRoute component={Help} path="/help/:section" {...props} />
          <PrivateRoute component={POS} path="/POS/:section" {...props} />

          <Route
            path="/"
            render={(item) =>
              props.isAdmin ? (
                <PrivateRoute
                  component={Dashboard}
                  path="/dashboard/:section"
                  {...props}
                />
              ) : (
                <Auth {...props} {...item} />
              )
            }
          />
          <Route
            path="/auth/:section"
            render={(item) => <Auth {...props} {...item} />}
          />
          <Route
            path="/info/:section"
            render={(item) => <Dashboard {...props} {...item} />}
          />
          <Route
            path="/"
            render={(item) =>
              props.isAdmin ? (
                <Dashboard {...props} />
              ) : (
                <Auth {...props} {...item} />
              )
            }
          />
        </Switch>
      </Route>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isonboard: state.master.isonboard,
  my_api: state.master.my_api,
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);
