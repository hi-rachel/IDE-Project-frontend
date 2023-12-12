import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: ${props => props.theme.colors.headerBg};
  color: ${props => props.theme.colors.text};
  padding-top: 10px;
`;

export const Logo = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 2.3rem;
  font-weight: 700;
  padding: 20px;
`;
