import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../Styles/WallMap.css"
import wall from "../Features/Climber/wall.png"


function About() {
    return(
        <Box sx={{ backgroundColor: 'white',}}>
        <img src={wall} alt="Facility Map" id="wallmap"/>
        <Typography>
            Welcome to BO(U)LDER! Your bouldering home and the home to BO(U)LDERBETA!!!<br/><br/>
            BO(U)LDERBETA opens up communication between you and the route setters so they can make routes that reflect what you want (and maybe even keep that route you have been working on for just a little longer). Use the above map with information on the home screen to find routes around the gym, based on difficulty and holds. Leave feedback to the route setters (favorite/in-progress) so they can have extra beta on what you and your friends like and want to see more of in the future.
        </Typography>
        </Box>

    )
}

export default About