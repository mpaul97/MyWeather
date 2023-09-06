import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Landing from './components/Landing';

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Landing />
        </ThemeProvider>
    )
};

export default App;
