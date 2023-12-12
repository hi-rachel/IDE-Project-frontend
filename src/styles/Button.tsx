import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  color: ${props => props.theme.colors.white};
  padding: 24px 32px;
  margin: 10px;
  border: none;

  &:hover {
    background: ${props => props.theme.colors.btnHover};
    color: ${props => props.theme.colors.btnText};
  }
`;
