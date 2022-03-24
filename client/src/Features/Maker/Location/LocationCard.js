import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteLocation } from "../../Reducer/locationsSlice";

function LocationCard({
  id,
  location,
  description,
  locationForm,
  setLocationForm,
  loc,
}) {
  const dispatch = useDispatch();

  function deleteCard(locId) {
    dispatch(deleteLocation(locId));
    window.location.reload();
  }
  
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
        <IconButton aria-label="delete" onClick={() => deleteCard(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          sx={{ zIndex: 0 }}
          aria-label="edit"
          onClick={() => {
            if (loc.id === id) {
              setLocationForm({
                id: id,
                location: location,
                loc_description: loc.loc_description,
              });
            }
          }}
        >
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default LocationCard;
