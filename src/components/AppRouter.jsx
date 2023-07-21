import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../route/route';
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}

      <Route path="/*" element={<Navigate to="/about" />}></Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
      <Route path="/*" element={<Navigate to="/login" />}></Route>
    </Routes>
  );
};

export default AppRouter;
