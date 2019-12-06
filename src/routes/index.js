import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import DashboardS from '~/pages/students/Dashboard';
import NewEditStudent from '~/pages/students/NewEdit';
import DashboardP from '~/pages/plan/Dashboard';
import NewEditPlan from '~/pages/plan/NewEdit';
import DashboardR from '~/pages/registration/Dashboard';
import NewEditRegistration from '~/pages/registration/NewEdit';
import SignIn from '~/pages/SignIn';

export default function RouteWrapper() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students/dashboard" component={DashboardS} isPrivate />
      <Route path="/students/new" component={NewEditStudent} isPrivate />
      <Route path="/students/edit/:id" component={NewEditStudent} isPrivate />
      <Route path="/plans/dashboard" component={DashboardP} isPrivate />
      <Route path="/plans/new" component={NewEditPlan} isPrivate />
      <Route path="/plans/edit/:id" component={NewEditPlan} isPrivate />
      <Route path="/registrations/dashboard" component={DashboardR} isPrivate />
      <Route
        path="/registrations/new"
        component={NewEditRegistration}
        isPrivate
      />
      <Route
        path="/registrations/edit/:id"
        component={NewEditRegistration}
        isPrivate
      />
    </Switch>
  );
}
