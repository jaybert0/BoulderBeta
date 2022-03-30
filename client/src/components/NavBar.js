import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { white } from '@mui/material/colors';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function NavBar({user, handleLogOutClick}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    if (user.admin === true) return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{backgroundColor: 'primary.main', color:"white",  borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary.light"
        indicatorColor="secondary">
              <Tab label="Home" {...a11yProps(0)} 
              component={Link} to='/'  
              />
              <Tab label="Route Setter" {...a11yProps(1)} 
              component={Link} to='/boltmonkey'  
              />
              <Tab label="Route Locations" {...a11yProps(2)} 
              component={Link} to='/location'  
              />
              <Tab label="Handholds" {...a11yProps(3)} 
              component={Link} to='/tech'  
              />
              <Tab label="Climber Home" {...a11yProps(4)} 
              component={Link} to='/climber'  
              />
              {user?<Tab onClick={handleLogOutClick} label="Logout" {...a11yProps(5)} />:<Tab label="Login" {...a11yProps(6)} component={Link} to='/login' />}
            </Tabs>
          </Box>
        </Box>
      );
      if (user.admin === false) return (
        <Box sx={{ width: '100%' }}>
         <Box sx={{backgroundColor: 'primary.main', color:"white",  borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary.light"
        indicatorColor="secondary">
              <Tab label="Home" {...a11yProps(0)} 
              component={Link} to='/'  
              />
              <Tab label="Technique Info" {...a11yProps(1)} 
              component={Link} to='/techinfo'  
              />
              <Tab label="Gym Info" {...a11yProps(2)} 
              component={Link} to='/gyminfo'  
              />
              {/* <Tab label="Techniques" {...a11yProps(3)} 
              component={Link} to='/tech'  
              />
              <Tab label="Climber Home" {...a11yProps(4)} 
              component={Link} to='/climber'  
              /> */}
              {user?<Tab onClick={handleLogOutClick} label="Logout" {...a11yProps(3)} />:<Tab label="Login" {...a11yProps(4)} component={Link} to='/login' />}
            </Tabs>
          </Box>
        </Box>
      );
    }

    export default NavBar;