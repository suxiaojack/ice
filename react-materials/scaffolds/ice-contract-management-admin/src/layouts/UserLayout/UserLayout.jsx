import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import routerConfig from '../../routerConfig';
import './UserLayout.scss';

export default class UserLayout extends Component {
  render() {
    return (
      <Layout className="user-layout">
        <div className="layer-mask" />
        <div className="user-content">
          <Switch>
            {routerConfig.map((item, index) => {
              return item.component ? (
                <Route
                  key={index}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ) : null;
            })}

            <Redirect exact from="/user" to="/user/login" />
          </Switch>
        </div>
        <Footer />
      </Layout>
    );
  }
}
