import * as React from 'react';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker'
import "../../Styles/ProblemForm.css"


function ProblemForm({problem, climbproblem, formProblem, setFormProblem}) {


    const initholds = problem.map((prob) => prob.technique);
    const holds = [...new Set(initholds)];
    // console.log(holds)
    // console.log(formProblem)
    const CLIMBFORMPROBLEMSUBMITTER = `http://localhost:9292/problems`
    const CLIMBFORMPROBLEMUPDATER = `http://localhost:9292/problems/${formProblem.id}`

    function handleSetProblem(att, input) {
        setFormProblem({...formProblem, [att]: input});
      };
      function amISubmission(){
        if(formProblem.id === ''){
          const config = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(formProblem)
          }
          fetch(CLIMBFORMPROBLEMSUBMITTER, config)
          .then(r => r.json())
          .then((data) => console.log(data))
          console.log(formProblem)
          console.log("submit button")
         
  
        }else{
          const config = {
            headers: {"Content-Type": "application/json"},
            method: "PATCH",
            body: JSON.stringify(formProblem)
          }
          fetch(CLIMBFORMPROBLEMUPDATER, config)
          .then(r => r.json())
          .then((data) => console.log(data))
          console.log("edit button")
  
        }
        window.location.reload()
      }
      
    return (
      <Box
      maxWidth
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75%' },
          position: 'sticky', top: 0,
          bgcolor: 'white',
          zIndex: 500
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <Stack spacing={2} direction="row">
        <TextField
          sx={{maxWidth:'20%'}}
          required
          // onChange={(input) => handleSetProblem('difficulty',input)}
          value={formProblem.difficulty}
          onChange={(e) => handleSetProblem('difficulty', e.target.value)}
          id="filled-required"
          label="Difficulty - V"
          variant="filled"
        />
        <TextField
        sx={{maxWidth:'20%'}}
          required
          onChange={(e) => handleSetProblem('grip_color', e.target.value)}
          value={formProblem.grip_color}
          id="filled-required"
          label="Grip Color"
          variant="filled"
        />
        <FormControl required sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="grip-hold-highlight">Grip Hold Highlight</InputLabel>
        <Select
          labelId="grip-hold-highlight-required-label"
          id="grip-hold-highlight-required"
          label="Grip Hold Highlight"
          value={formProblem.technique}
          onChange={(e) => handleSetProblem('technique',e.target.value)}
          // value={formProblem.technique}
        >
          {holds.map((hold) => (
          <MenuItem 
            key={hold}
            value={hold}
          >
            {hold}
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
          onChange={(e) => handleSetProblem('location',e.target.value)}
          value={formProblem.location}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
       
  
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
            handleSetProblem('end_date',e)}}
          renderInput={(params) => <TextField {...params} helperText={"mm/dd/yyyy"}/>}
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
          onChange={(e) => handleSetProblem('problem_description',e.target.value)}
          value={formProblem.problem_description}
        />
      </div>
      <div>


        <Button variant='contained' id='submit' onClick={() => amISubmission()}>Submit!</Button>


      </div>
      </Box>
      
      
    )
    }
export default ProblemForm