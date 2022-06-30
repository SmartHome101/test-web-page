import { Typography, Box } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import axios from "axios";

// import custom components
import IOSSwitch from './IOSSwitch'


const CardSensorHolder = ({ sensor }) => {
    const [checked, setChecked] = useState(false);
    const [data, setData] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://j55nm7cgfj.execute-api.us-east-2.amazonaws.com/default/LambdaForIoT?topic=${sensor.SensorTopic}`,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': process.env.REACT_APP_GATEWAY_API_KEY_SABEK_USER,
                    }
                });
            const { data } = request
            setData(data);
            if (request.data.payload.message === 'ON') {
                setChecked(true)
            }
            else {
                setChecked(false)
            }
            return request;
        }
        fetchData();
    }, [sensor.SensorTopic])


    const ConvertTFtoONOFF = (checked) => {
        let message = '';
        if (checked === true) {
            message = 'ON'
        }
        else {
            message = 'OFF'
        }
        return message
    }


    const PostData = (checked) => {
        const response = axios.post(`https://j55nm7cgfj.execute-api.us-east-2.amazonaws.com/default/LambdaForIoT?topic=${sensor.SensorTopic}`,
            { 'message': ConvertTFtoONOFF(checked) },
            {
                headers: {
                    'Content-type': 'application/json',
                    'X-API-KEY': process.env.REACT_APP_GATEWAY_API_KEY_SABEK_USER,
                }
            })
        return response;
    }


    const handleOnChange = async (e) => {
        setChecked(e.target.checked)
        if (sensor.SensorTopic.length !== 0) {
            try {
                await PostData(e.target.checked)
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    const lastModifiedTimeReadable = new Date(data.lastModifiedTime)

    return (
        <Box sx={{ mr: { xs: 1, sm: 2, md: 2 }, mb: 2 }}>
            <Card sx={{
                minWidth: '190px',
                borderRadius: '20px',
                bgcolor: '#fff',
                boxShadow: 3,
                color: '#000'
            }}>
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '600'}}>
                        {sensor.sensorName}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2">
                            {ConvertTFtoONOFF(checked)}
                        </Typography>
                        <Typography variant="subtitle2" >{lastModifiedTimeReadable.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Typography>
                    </Box>
                    <FormGroup>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="subtitle2">Off</Typography>
                            <FormControlLabel
                                control={
                                    <IOSSwitch
                                        onChange={handleOnChange}
                                        checked={checked}
                                        sx={{ m: 1 }}
                                    />}
                            />
                            <Typography variant="subtitle2">On</Typography>
                        </Stack>
                    </FormGroup >
                </CardContent>
            </Card>
        </Box>
    )
}

export default CardSensorHolder