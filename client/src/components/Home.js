import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import { BrowserRouter as Link } from "react-router-dom";
import ClimberHome from "../Features/Climber/ClimberHome"



function Home({user, problem, climbproblem}) {

    if (user.admin === true) return(
    <Container>
        
            <Typography variant='h2'>Welcome back Route Setter!<br/><br/></Typography>
            <Typography variant='h4'>Please use the NavBar above or click on one of the following buttons.</Typography>
            <Box alignItems="center"
        justifyContent="center"
>

            <Button variant="contained" component={Link} to="/boltmonkey">Route Setter</Button> 
            <Button sx={{m: 2}} variant="contained" component={Link} to="/location">Route Locations</Button> 
            <Button variant="contained" component={Link} to="/tech">Handholds</Button>            

            </Box>
            <Typography><br/><br/>
            BO(U)LDERBETA © 2022</Typography>
    </Container>
)

if (user.admin === false) return(
    <Container>
        <Box sx={{bgcolor: 'white'}}>
            <Typography variant='h2'>Welcome back {user.username}!<br/><br/></Typography>
            <Typography variant='h4'>What would you like to climb today?</Typography>
            </Box>
            <ClimberHome 
        problem={problem} 
      climbproblem={climbproblem} user={user}/>
            <Typography><br/><br/>
            BO(U)LDERBETA © 2022</Typography>
    </Container>
)

}

export default Home