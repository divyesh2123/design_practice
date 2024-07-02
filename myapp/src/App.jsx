import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple, red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Layout from './Layout';


const theme = createTheme({
  palette: {
    primary: red,
    secondary: purple,
  },
});
function App() {
  
  return (

  <Layout/>
  )
}

export default App
