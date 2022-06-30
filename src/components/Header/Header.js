import { Button, Box } from "@mui/material"
const Header = ({ title }) => {
    return (
        <Box sx={{display: 'flex'}}>
            <h3>{title}</h3>
            <Button onClick={(e)=>{console.log('click')}} variant="contained">Add</Button>
        </Box>
    )
}

Header.defaultProps = {
    title: 'Control your home from a web page',
}
export default Header