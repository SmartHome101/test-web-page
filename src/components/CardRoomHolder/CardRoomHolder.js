import { useState } from "react";
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import custom components
import RoomSensorsHolder from "../RoomSensorsHolder/RoomSensorsHolder";

const CardRoomHolder = ({ RoomName, RoomIcon, Sensors }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Accordion
                sx={{
                    borderRadius: '20px',
                    bgcolor: '#f8f9fa',
                    boxShadow: 3,
                    p: '10px'
                }}
                expanded={expanded === 'panel'}
                onChange={handleChange('panel')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Box
                        sx={{
                            display: 'flex', 
                            justifyContent: 'space-around', 
                            alignContent: 'center', 
                            alignItems: 'center',
                        }}>
                        {RoomIcon}
                        <Typography variant="h6" component="div" sx={{ mr: 2, ml: 2, fontWeight: 'bold' }}>
                            {RoomName}
                        </Typography>
                        <Typography variant="body1" sx={{color: '#6c757d'}}>{Sensors.length}x devices</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <RoomSensorsHolder Sensors={Sensors} />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default CardRoomHolder