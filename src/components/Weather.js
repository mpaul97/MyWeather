import { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import json_realtime from '../data/realtime_temp_date.json';
import json_forecast from '../data/forecast_temp_data.json';
import InfoModel from "../models/InfoModel";
import Current from "./Current";

function Weather({ location }) {

    const [realtimeData, setRealtimeData] = useState(() => {
        const data = json_realtime['current'];
        console.log(data);
        return (
            new InfoModel(
                data['condition']['text'], data['temp_f'],
                data['feelslike_f'], data['humidity']
            )
        )
    });
    // console.log(realtimeData);
    // console.log(json_realtime)
    const [forecastData, setForecastData] = useState(json_forecast);

    return (
        <Box
            id="main"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            p={5}
        >
            <Typography
                variant="h4"
                fontWeight={600}
                pb={2}
            >
                {location}
            </Typography>
            <Divider flexItem />            
            <Current info={realtimeData} />
        </Box>
    )
};

export default Weather;