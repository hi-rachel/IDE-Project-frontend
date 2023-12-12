import { IDEHeaderContainer, IDELogo } from './IDEPage.style';
import StyledLink from '../../styles/StyledLink';
import CurrentUser from './CurrentUser';

const IDEHeader = () => {
  return (
    <IDEHeaderContainer>
      <IDELogo>
        <StyledLink to="/">DJIDE </StyledLink>
      </IDELogo>
      <CurrentUser />
    </IDEHeaderContainer>
  );
};

export default IDEHeader;
