import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./utilities/theme";
import Education from './componente/edukesyente';
import Navbar from './componente/navbar';
import Profile from './componente/Suparman';
import { BrowserRouter as Router } from 'react-router-dom';

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background-color: #f2f7f2;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
      <Navbar />
      <Body>
        <Profile />
        <Education />
      </Body>
    
      </Router>
    </ThemeProvider>
  );
};

export default App;
