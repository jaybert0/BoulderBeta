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
import { useNavigate } from 'react-router';
import {createTech, updateTech} from '../../Reducer/techesSlice'
import { useDispatch } from "react-redux";
import { fetchTech } from "../../Reducer/techesSlice";


function TechForm({techForm, setTechForm}) {
  const techSliceData = useSelector((state) => state.teches.entities);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  // console.log("techForm:");
  // console.log(techForm);
  function handleSetTech(att, input) {
    setTechForm({ ...techForm, [att]: input });
  }
  console.log(techForm)
  function amISubmission() {
    if (techForm.id === "") 
    // {
    //   const config = {
    //     headers: { "Content-Type": "application/json" },
    //     method: "POST",
    //     body: JSON.stringify(techForm),
    //   };
    //   fetch("/teches", config)
    //     .then((r) => r.json())
    //     .then((data) => console.log(data));
    //   console.log("submit button");
    // } 
    {
      dispatch(
        createTech({
          handholds: techForm.handholds,
          hold_description: techForm.hold_description
        })
      )
      console.log("SUBMIT VIA REDUX")
    }
    
    
    else 
    // {
    //   const config = {
    //     headers: { "Content-Type": "application/json" },
    //     method: "PATCH",
    //     body: JSON.stringify(techForm),
    //   };
    //   fetch(`/teches/${techForm.id}`, config)
    //     .then((r) => r.json())
    //     .then((data) => console.log(data));
    //   console.log("edit button");
    // }
    {
      dispatch(
        updateTech({
          id: techForm.id,
          handholds: techForm.handholds,
          hold_description: techForm.hold_description
        })
      );
    }

    navigate('/tech')
    window.location.reload();
  }
  return (
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
            value={techForm.handholds}
            onChange={(e) => handleSetTech("handholds", e.target.value)}
            id="filled-required"
            label="Handhold Highlight"
            variant="filled"
          />
          <TextField
            sx={{ maxWidth: "80%" }}
            required
            onChange={(e) =>
              handleSetTech("hold_description", e.target.value)
            }
            value={techForm.hold_description}
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

export default TechForm;
