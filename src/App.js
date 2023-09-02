import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Home from './components/Home';

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home />
        </ThemeProvider>
    )
};

export default App;
