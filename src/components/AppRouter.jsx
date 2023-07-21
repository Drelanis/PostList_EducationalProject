import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from '../route/route';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
      <Route path="/*" element={<Navigate to="/about" />}></Route>
    </Routes>
  );
};

export default AppRouter;
