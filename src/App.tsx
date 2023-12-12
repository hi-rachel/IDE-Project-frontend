import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle';
import useThemeStore from './store/useThemeStore';
import { AppRoutes } from './routes/AppRoutes';

const App: React.FC = () => {
  const { theme } = useThemeStore();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;
