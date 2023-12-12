import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import useThemeStore from '../../../../store/useThemeStore';
import useUserStore from '../../../../store/userStore';
import StyledLink from '../../../../styles/StyledLink';
import LoginSignUpHeader from './LoginSignUpHeader';
import {
  HeaderContainer,
  UserHeader,
  Logo,
  UserProfileImg,
  UserName,
  ThemeToggleButton,
} from './MainHeader.style';

const MainHeader = () => {
  const { toggleTheme, isDarkMode } = useThemeStore();
  const iconColor = isDarkMode ? 'yellow' : 'black';
  const { isLoggedIn } = useUserStore();

  return (
    <>
      <HeaderContainer>
        <Logo>DJIDE</Logo>
        <StyledLink
          to="/mypage"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {isLoggedIn ? (
            <UserHeader>
              <UserProfileImg />
              <UserName>유저 이름</UserName>
            </UserHeader>
          ) : (
            <LoginSignUpHeader />
          )}
        </StyledLink>
      </HeaderContainer>
      <ThemeToggleButton onClick={toggleTheme}>
        <IconContext.Provider value={{ color: iconColor, size: '25px' }}>
          {isDarkMode ? <RiSunFill /> : <RiMoonClearFill />}
        </IconContext.Provider>
      </ThemeToggleButton>
    </>
  );
};

export default MainHeader;
