import { Box, Typography } from "@mui/material";

const TopicStatus = ({ Data }) => {

    const lastModifiedTimeReadable = new Date(Data.lastModifiedTime)
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "auto",
                boxShadow: 3,
                borderRadius: 2,
                p: "16px",
            }}
        >
            <Typography
                sx={{ fontSize: "22px", fontWeight: "600", padding: "0 2px" }}
            >Topic Status</Typography>
            <div>Topic Name: {Data.topic}</div>
            <div>Topic State: {Data.payload.message !== null && <span>{Data.payload.message}</span>}</div>
            <div>Last modified time: {lastModifiedTimeReadable.toLocaleString() !== "Invalid Date" && <span>{lastModifiedTimeReadable.toLocaleString()}</span>}</div>
        </Box>
    )
}

export default TopicStatus