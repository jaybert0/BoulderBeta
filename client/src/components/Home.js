import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Home() {
return(
    <Container>
        <Box>
            <Typography>Welcome back Route Setter!<br/><br/>
            Please use the NavBar above or click on one of the following buttons.</Typography>
            <Stack spacing={3} direction="row">

            <Button variant="contained" component={Link} to="/boltmonkey">Route Setter</Button>
            <Button variant="contained" component={Link} to="/location">Route Locations</Button>
            <Button variant="contained" component={Link} to="/tech">Handholds</Button>

            
            </Stack>
        </Box>
    </Container>
)

}

export default Home