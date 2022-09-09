import * as React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'src/Constants/routes';
import Dashboard from 'src/Containers/Dashboard/dashboard';
import AppState from 'src/Context/appState';

const CustomRouter: React.FC = () => {
  return (
    <Router>
      <AppState>
        <Routes>
          <Route path={ROUTES.ROOT} element={<Navigate replace to={ROUTES.DASHBOARD} />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Routes>
      </AppState>
    </Router>
  );
};

export default CustomRouter;
