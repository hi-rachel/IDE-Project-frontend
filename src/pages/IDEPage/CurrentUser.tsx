import {
  CurrentUserBox,
  RightBox,
  StyleAiOutlineComment,
  UserProfile,
} from './IDEPage.style';
import { AiOutlineUser } from 'react-icons/ai';

const CurrentUser = () => {
  const currentUserList = ['지원', '나리', '총미'];
  return (
    <RightBox>
      <CurrentUserBox>
        {currentUserList.map(user => {
          return (
            <>
              <UserProfile>{user}</UserProfile>
              <UserProfile>
                <AiOutlineUser
                  style={{ margin: '0 auto', width: '20px', height: '20px' }}
                />
              </UserProfile>
            </>
          );
        })}
      </CurrentUserBox>
      <StyleAiOutlineComment />
    </RightBox>
  );
};

export default CurrentUser;
