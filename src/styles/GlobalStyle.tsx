import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
  }
`;

export default GlobalStyle;
