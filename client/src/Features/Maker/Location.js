import * as React from "react";
import { useState, useEffect } from "react";
import LocationForm from "./LocationForm";
import LocationCard from "./LocationCard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";


function Tech() {
    const [locationData, setLocationData] = useState([])
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      .then((data) => setLocationData(data));
  }, []);

  return (
    <div>
      <LocationForm
        sx={{ position: "sticky", top: 0 }}
      />
      <Box sx={{ justifyContent: "flex-start" }}>
        <br />
        <br />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {locationData.map((loc) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={loc.id}
              sx={{ boxShadow: 3 }}
            >
              <Item>
                <LocationCard id={loc.id} 
                location={loc.location} 
                description={loc.loc_description}  
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Location;
