import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader/MainHeader';
import ThemeToggleBtn from '../components/ThemeToggleBtn/ThemeToggleBtn';

const MainLayout: React.FC = () => {
  return (
    <div>
      <MainHeader />
      <div>
        <Outlet />
      </div>
      <ThemeToggleBtn />
    </div>
  );
};

export default MainLayout;
