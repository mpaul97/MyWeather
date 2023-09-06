import { useEffect, useState } from "react";
import { 
    Box, Container, Typography, 
    Paper, IconButton, Menu,
    MenuItem, TextField, InputAdornment,
    ListItemIcon, ListItemText
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Search, Favorite, Person, Settings } from "@mui/icons-material";
import Weather from "./Weather";

function Landing() {

    // nav menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // location
    const [location, setLocation] = useState('Los Angeles');

    return (
        <Box
            id="container"
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width='100vw'
        >
            <Box
                id="header"
                flexGrow={1}
                component={Paper}
                width='100%'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                p={5}
            >
                <Typography
                    variant="h4"
                    color='primary'
                    fontWeight={600}
                >
                    MyWeather
                </Typography>
                <TextField
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            (e.target.value !== '') ? setLocation(e.target.value) : setLocation(location)
                        }
                    }}
                    label=""
                    placeholder="Search by City or Zip Code"
                    variant="standard"
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>),
                        disableUnderline: false
                    }}
                    sx={{
                        width: '30vw'
                    }}
                />
                <IconButton onClick={handleMenuClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem onClick={handleMenuClose} color="primary">
                        <ListItemIcon><Favorite fontSize="small" /></ListItemIcon>
                        <ListItemText>Favorites</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon><Person fontSize="small" /></ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
                        <ListItemText>Settings</ListItemText>
                    </MenuItem>
                </Menu>
            </Box>
            <Weather location={location} />
        </Box>
    )
};

export default Landing;

// const API_KEY = ;
// const API_HOST = 'weatherapi-com.p.rapidapi.com';
// // const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Los%20Angeles%20US';
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': ,
// // 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// // 	}
// // };

// // try {
// // 	const response = await fetch(url, options);
// // 	const result = await response.text();
// // 	console.log(result);
// // } catch (error) {
// // 	console.error(error);
// // }

// function App() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': API_KEY,
//             'X-RapidAPI-Host': API_HOST
//         }
//     };
//     const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Los%20Angeles%20US';
//     useEffect(() => {
//         fetch(url, options)
//             .then(res => res.json())
//             .then(data => console.log(data))
//             .catch(error => console.error(error))
//     }, [])
//     return (
//         <div className="App">
            
//         </div>
//     );
// }

// export default App;