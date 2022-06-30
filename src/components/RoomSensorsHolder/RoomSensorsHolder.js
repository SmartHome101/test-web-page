import { Box, Container } from "@mui/material"
// import custom components
import CardSensorHolder from "../CardSensorHolder/CardSensorHolder"

const RoomSensorsHolder = ({ Sensors }) => {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    color: '#fff',
                    width: "auto",
                    borderRadius: '20px',
                    mb: 5,
                }}
            >
                <Box sx={{
                    display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, flexWrap: 'wrap'
                }}>
                    {Sensors.map((sensor) => (<CardSensorHolder key={sensor.sensorId} sensor={sensor} />))}
                </Box>
            </Box>
        </Container>
    )
}

export default RoomSensorsHolder