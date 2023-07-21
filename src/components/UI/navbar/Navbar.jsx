import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.setItem('auth', 'false');
  };

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="navbar__links_item" to="/about">
          Про сайт
        </Link>
        <Link className="navbar__links_item" to="/posts">
          Пости
        </Link>
        <MyButton onClick={logout} to="/login">
          Вийти
        </MyButton>
      </div>
    </div>
  );
};

export default Navbar;
