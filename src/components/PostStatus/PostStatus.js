import { useState } from "react";
import { Typography, Box, Button, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel, TextField } from "@mui/material";
import axios from "axios";
// import axios from '../../lib/generalAPI';


const PostStatus = ({ Topics, getStyles }) => {
    const [topicName, setTopicName] = useState('');
    // const [status, setStatus] = useState(true);
    const [message, setMessage] = useState(null);
    const handleChange = (event) => {
        setTopicName(event.target.value);
    };


    const handleMessageChange = (event) => {
        if (event.target.value === 'ON') {
            setMessage("ON");
        }
        else {
            setMessage("OFF");
        }
    };

    // my aws account api -- IAM user Account
    // const PostData = () => {
    //     const response = axios.post(`${topicName}`,
    //         { status },
    //         {
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 'X-API-KEY': process.env.REACT_APP_GATEWAY_API_KEY_RAMADAN_IAM_USER,
    //             }
    //         })
    //     return response;
    // }

    // Sabek Account
    const PostData = () => {
        const response = axios.post(`https://j55nm7cgfj.execute-api.us-east-2.amazonaws.com/default/LambdaForIoT?topic=${topicName}`,
            { message },
            {
                headers: {
                    'Content-type': 'application/json',
                    'X-API-KEY': process.env.REACT_APP_GATEWAY_API_KEY_SABEK_USER,
                }
            })
        return response;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (topicName.length !== 0) {
            try {
                await PostData()
                setTopicName('')
                setMessage(null)
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "auto",
                boxShadow: 3,
                borderRadius: 2,
                p: "16px",
                mb: 5,
                mt: 5,
            }}
        >
            <Box sx={{ width: "100%", mb: "2px" }}>
                <Typography
                    sx={{ fontSize: "18px", fontWeight: "600", padding: "0 2px" }}
                >
                    Post status to a specific topic
                </Typography>
                <Typography
                    sx={{ fontSize: "14px", padding: "0 2px", mt: "2px" }}
                >
                    choose a topic from list below.
                </Typography>
            </Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField
                    id="outlined-helperText"
                    label="Topic Name"
                    value={topicName}
                    onChange={handleChange}
                    helperText="Please, choose the topic name carefully"
                />
                {/* <InputLabel>Topic Name</InputLabel>
                <Select
                    value={topicName}
                    label="Topic Name"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {Topics.map((topic) => (
                        <MenuItem
                            key={topic}
                            value={topic}
                            style={getStyles(topic, topicName, theme)}
                        >
                            {topic}
                        </MenuItem>
                    ))}
                </Select> */}
                <FormLabel id="demo-controlled-radio-buttons-group" sx={{ mt: 2 }}>Status</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={message}
                    onChange={handleMessageChange}
                >
                    <FormControlLabel value='ON' control={<Radio />} label="ON" />
                    <FormControlLabel value='OFF' control={<Radio />} label="OFF" />
                </RadioGroup>
            </FormControl>
            <Box sx={{ mt: 2, mb: 3 }}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        maxHeight: 45,
                        alignSelf: "flex-start",
                        fontSize: "14px",
                    }}
                >
                    post Status
                </Button>
            </Box>
        </Box>
    )
}

export default PostStatus