import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ProblemForm from './ProblemForm'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function LocationCard({id, location, description, locationForm, setLocationForm, loc}) {
    function deleteCard(){
        console.log(id)
        const config = {method: "DELETE"}
        fetch(`locations/${id}`, config)
        .then((r) => r.json())
        .then((data) => console.log(data))
        window.location.reload()
      }
      console.log(description)
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
          <Typography variant="body1" color="text.primary">
              ID: {id} <br />           
              Location: {location} <br />   
              Description: {description} <br />   
              </Typography> 
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="delete">
              <DeleteIcon onClick={() => deleteCard()}/>
            </IconButton>
            <IconButton sx={{zIndex: 0}} aria-label="edit"
            onClick= {() => {
                if (loc.id === id) {
                    setLocationForm({
                        id: id,
                        location: location,
                        loc_description: loc.loc_description
                }
                    )
                }
                
              } 
              } 
            >
            <EditIcon   />
            </IconButton>
        </CardActions>
      </Card>
    );

}

export default LocationCard