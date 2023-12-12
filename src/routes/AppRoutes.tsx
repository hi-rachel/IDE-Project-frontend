import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import Login from '../pages/LoginPage/Login';
import SignUp from '../pages/SignUpPage/SignUp';
import MyPage from '../pages/MyPage/MyPage';
import GuestEnterPage from '../pages/GuestEnterPage/GuestEnterPage';
import IDEPage from '../pages/IDEPage/IDEPage';
import MainLayout from '../layout/MainLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/guest-enter" element={<GuestEnterPage />} />
      <Route path="/ide" element={<IDEPage />} />
    </Routes>
  );
};
