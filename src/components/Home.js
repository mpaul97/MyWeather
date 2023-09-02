import { useEffect, useState } from "react";
import { 
    Box, Container, Typography, 
    Paper, IconButton, Menu,
    MenuItem,
    Autocomplete,
    TextField,
    InputAdornment
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import json_realtime from '../data/realtime_temp_date.json';
import json_forecast from '../data/forecast_temp_data.json';
import { Search } from "@mui/icons-material";

function Home() {

    // nav menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    
    const [realtimeData, setRealtimeData] = useState(json_realtime);

    useEffect(() => {
        console.log(realtimeData);
    }, [])

    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width='100vw'
        >
            {/* Header */}
            <Box
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
                <IconButton onClick={handleMenuClick}>
                    <MenuIcon color='primary' />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Favorites</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                </Menu>
            </Box> 
            {/* End Header */}
            {/* Main Content */}
            <Box>
                <Autocomplete
                    freeSolo
                    renderInput={(params) => 
                        <TextField 
                            {...params} 
                            label="" 
                            placeholder="Search City"
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (<InputAdornment position='start'> <Search /> </InputAdornment>),
                                disableUnderline: true
                            }}
                        />
                    }
                />
            </Box>
        </Box>
    )
};

export default Home;

// const API_KEY = '9fa9382f92msh7a31d64d5592c88p168c3djsn1401d40dbe5c';
// const API_HOST = 'weatherapi-com.p.rapidapi.com';
// // const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Los%20Angeles%20US';
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': '9fa9382f92msh7a31d64d5592c88p168c3djsn1401d40dbe5c',
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