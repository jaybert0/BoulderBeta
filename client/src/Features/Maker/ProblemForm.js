import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "../../Styles/ProblemForm.css";
// formProblem and setFormProblem live in MakerHome
function ProblemForm({ problem, climbproblem, formProblem, setFormProblem }) {
  const [tech, setTech] = useState([]);
  const [loc, setLoc] = useState([]);

  useEffect(() => {
    fetch("/teches")
      .then((r) => r.json())
      // .then((data) => console.log(data))
      .then((data) => setTech(data));
  }, []);

  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      // .then((data) => console.log(data))
      .then((data) => setLoc(data));
  }, []);

  // console.log(tech)
  const initholds = tech.map((prob) => prob);
  const holds = [...new Set(initholds)];
  const initlocs = loc.map((loc) => loc.location);
  const locs = [...new Set(initlocs)];
  // console.log(holds)
  // console.log(formProblem)
  const CLIMBFORMPROBLEMSUBMITTER = "/problems";
  const CLIMBFORMPROBLEMUPDATER = `/problems/${formProblem.id}`;

  function handleSetProblem(att, input) {
    setFormProblem({ ...formProblem, [att]: input });
  }
  console.log(formProblem)
  function amISubmission() {
    if (formProblem.id === "") {
      const config = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(formProblem),
      };
      fetch(CLIMBFORMPROBLEMSUBMITTER, config)
        .then((r) => r.json())
        .then((data) => console.log(data));
      console.log(formProblem);
      console.log("submit button");
    } else {
      const config = {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: JSON.stringify(formProblem),
      };
      fetch(CLIMBFORMPROBLEMUPDATER, config)
        .then((r) => r.json())
        .then((data) => console.log(data));
      console.log("edit button");
    }
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
        <Stack spacing={2} direction="row">
          <TextField
            sx={{ maxWidth: "20%" }}
            required
            value={formProblem.difficulty}
            onChange={(e) => handleSetProblem("difficulty", e.target.value)}
            id="filled-required"
            label="Difficulty - V"
            variant="filled"
          />
          <TextField
            sx={{ maxWidth: "20%" }}
            required
            onChange={(e) => handleSetProblem("grip_color", e.target.value)}
            value={formProblem.grip_color}
            id="filled-required"
            label="Grip Color"
            variant="filled"
          />
          <FormControl required sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="grip-hold-highlight">
              Grip Hold Highlight
            </InputLabel>
            <Select
              labelId="grip-hold-highlight-required-label"
              id="grip-hold-highlight-required"
              label="Grip Hold Highlight"
              value={formProblem.technique}
              onChange={(e) => handleSetProblem("technique", e.target.value)}
            >
              {holds.map((hold) => (
                <MenuItem key={hold.id} value={hold.id}>
                  {hold.handholds}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          <FormControl required sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="location">Location</InputLabel>
            <Select
              labelId="location-required-label"
              id="location-required"
              label="Location *"
              onChange={(e) => handleSetProblem("loc_id", e.target.value)}
              value={formProblem.location}
            >
              {locs.map((loc) => (
                <MenuItem key={loc} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {/* <DatePicker
          label="End Date*"
          value={formProblem.end_date}
          format="dd-MM-yyyy"
          onChange={(e) => {
            handleSetProblem('end_date',e)}}
          renderInput={(params) => <TextField {...params} helperText={"mm/dd/yyyy"}/>}
        /> */}
            <DatePicker
              disablePast
              label="End Date*"
              value={formProblem.end_date}
              format="dd-MM-yyyy"
              onChange={(e) => {
                handleSetProblem("end_date", e);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={"mm/dd/yyyy"} />
              )}
            />
          </LocalizationProvider>
        </Stack>
        <div></div>
        <TextField
          multiline
          maxRows={3}
          required
          id="filled-required"
          label="Route Description"
          variant="filled"
          onChange={(e) =>
            handleSetProblem("problem_description", e.target.value)
          }
          value={formProblem.problem_description}
        />
      </div>
      <div>
        <Button variant="contained" id="submit" onClick={() => amISubmission()}>
          Submit!
        </Button>
      </div>
    </Box>
  );
}
export default ProblemForm;
