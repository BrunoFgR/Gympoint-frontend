import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layout/auth';
import DefaultLayout from '../pages/_layout/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const sign = false;

  if (sign && !isPrivate) {
    return <Redirect to="/student/dashboard" />;
  }

  if (!sign && isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = sign ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
