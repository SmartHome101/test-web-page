import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './Member.module.css'
import { Box } from '@mui/material';


const Member = ({ Name, About, Avatar, ContactInfo }) => {
    return (
        <Box>
            <Card
                sx={{
                    width: {xs: '250px', lg: '300px'},
                    minHeight: '450px',
                    boxShadow: 4,
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mt: 4
                }}>
                <img alt='avatar' src={Avatar} className={classes.media}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {Name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {About}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{borderRadius: '50px'}} href={ContactInfo} target="_blank">connect</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Member