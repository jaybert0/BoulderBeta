import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useNavigate } from "react-router";
import { createTech, updateTech, fetchTech } from "../../Reducer/techesSlice";
import { useDispatch, useSelector } from "react-redux";

function TechForm({ techForm, setTechForm }) {
  const techSliceData = useSelector((state) => state.teches.entities);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  function handleSetTech(att, input) {
    setTechForm({ ...techForm, [att]: input });
  }
  console.log(techForm);
  function amISubmission() {
    if (techForm.id === "") {
      dispatch(
        createTech({
          handholds: techForm.handholds,
          hold_description: techForm.hold_description,
        })
      );
    } else {
      dispatch(
        updateTech({
          id: techForm.id,
          handholds: techForm.handholds,
          hold_description: techForm.hold_description,
        })
      );
    }

    navigate("/tech");
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
          {/* <FormControl required sx={{ m: 1, minWidth: 150, maxWidth: "20%" }}>
            <InputLabel id="grip-hold-highlight">
              Grip Hold Highlight
            </InputLabel>
            <Select
              labelId="grip-hold-highlight-required-label"
              id="grip-hold-highlight-required"
              label="Grip Hold Highlight"
              value={techForm.handholds}
              onChange={(e) => handleSetTech("handholds", e.target.value)}
            >
              {holds.map((hold) => (
                <MenuItem key={hold.id} value={hold.id}>
                  {hold.handholds}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl> */}
          <TextField
            sx={{ maxWidth: "80%" }}
            required
            onChange={(e) => handleSetTech("hold_description", e.target.value)}
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
