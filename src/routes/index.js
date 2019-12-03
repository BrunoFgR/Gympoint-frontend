import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import DashboardS from '~/pages/students/Dashboard';
import NewStudent from '~/pages/students/New';
import EditStudent from '~/pages/students/Edit';
import DashboardP from '~/pages/plan/Dashboard';
import NewPlan from '~/pages/plan/New';
import EditPlan from '~/pages/plan/Edit';
import DashboardR from '~/pages/registration/Dashboard';
import NewRegistration from '~/pages/registration/New';
import EditRegistration from '~/pages/registration/Edit';
import SignIn from '~/pages/SignIn';

export default function RouteWrapper() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/student/dashboard" component={DashboardS} isPrivate />
      <Route path="/student/new" component={NewStudent} isPrivate />
      <Route path="/student/edit/:id" component={EditStudent} isPrivate />
      <Route path="/plan/dashboard" component={DashboardP} isPrivate />
      <Route path="/plan/new" component={NewPlan} isPrivate />
      <Route path="/plan/edit/:id" component={EditPlan} isPrivate />
      <Route path="/registration/dashboard" component={DashboardR} isPrivate />
      <Route path="/registration/new" component={NewRegistration} isPrivate />
      <Route
        path="/registration/edit/:id"
        component={EditRegistration}
        isPrivate
      />
    </Switch>
  );
}
