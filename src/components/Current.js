import { Box, Typography } from "@mui/material";
import { WiCloud, WiFahrenheit } from "weather-icons-react";

const weatherIcons = {
    'Overcast': <WiCloud size={150} />
};

function Current({ info }) {
    return (
        <Box>
            <Box sx={{ ml: -3 }}>
                {weatherIcons[info.conditionText]}
            </Box>
            <Box 
                display="flex"
                justifyContent="start"
                alignItems="start"
            >
                <Typography variant="h3">{info.temperature}
                    <WiFahrenheit />
                </Typography>
            </Box>
            <Typography variant="h5">{info.conditionText}</Typography>
        </Box>
    )
};

export default Current;