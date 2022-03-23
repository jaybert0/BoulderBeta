import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import { useState, useEffect } from "react";

function LocationForm({ locationForm, setLocationForm}) {
    
    console.log("locationForm:")
    console.log(locationForm)
function handleSetLocation(att, input) {
    setLocationForm({...locationForm, [att]: input})
}
function amISubmission() {
    if (locationForm.id === "") {
      const config = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(locationForm),
      };
      fetch('/locations', config)
        .then((r) => r.json())
        .then((data) => console.log(data));
      
      console.log("submit button");
    } else {
      const config = {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: JSON.stringify(locationForm),
      };
      fetch(`/locations/${locationForm.id}`, config)
        .then((r) => r.json())
        .then((data) => console.log(data));
      console.log("edit button");
    }
    window.location.reload();
  }
return(
    <Box
      maxWidth
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "75%" },
        position: "sticky",
        top: 0,
        bgcolor: "white",
        zIndex: 500,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Stack spacing={1} direction="row">
          <TextField
            sx={{ maxWidth: "20%" }}
            required
            value={locationForm.location}
            onChange={(e) => handleSetLocation("location", e.target.value)}
            id="filled-required"
            label="Location"
            variant="filled"
          />
          <TextField
            sx={{ maxWidth: "80%" }}
            required
            onChange={(e) => handleSetLocation("loc_description", e.target.value)}
            value={locationForm.loc_description}
            id="filled-required"
            label="Description"
            variant="filled"
          />
        </Stack>
      </div>
      <div>
        <Button variant="contained" id="submit" onClick={() => amISubmission()}>
          Submit!
        </Button>
      </div>
    </Box>
  );


}

export default LocationForm;