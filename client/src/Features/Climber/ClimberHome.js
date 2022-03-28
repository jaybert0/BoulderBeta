import { useState, useEffect } from "react";
import ProblemCard from "./ProblemCard";
import WallMap from "./WallMap";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { render } from "react-dom";
import Slider from "@mui/material/Slider";
import Typography from '@mui/material/Typography';


// have to fetch for all problems and then filter. do not set up separate fetches on backend for difficulty. buttons filter to sort rather than fetch.

function ClimberHome({
  // setSearch,
  problem,
  getProblems,
  climbproblem,
  getClimbproblems,
  user,
}) {
  const marks = [
    {
      value: 0,
      label: "V0",
    },
    {
      value: 1,
      label: "V1",
    },
    {
      value: 2,
      label: "V2",
    },
    {
      value: 3,
      label: "V3",
    },
    {
      value: 4,
      label: "V4",
    },
    {
      value: 5,
      label: "V5",
    },
    {
      value: 6,
      label: "V6",
    },
    {
      value: 7,
      label: "V7",
    },
    {
      value: 8,
      label: "V8",
    },
    {
      value: 9,
      label: "V9",
    },
    {
      value: 10,
      label: "V10",
    },
    {
      value: 11,
      label: "V11",
    },
    {
      value: 12,
      label: "V12",
    },
  ];

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
  const initholds = tech.map((prob) => prob);
  const holds = [...new Set(initholds)];
  const initlocs = loc.map((loc) => loc.location);
  const locs = [...new Set(initlocs)];
  console.log(holds);
  console.log(locs);
  const [value, setValue] = useState([1, 3]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `V${value}`;
}
console.log(value)
  // const delay = ms => new Promise(res => setTimeout(res, ms))
  // const [technique, setTechnique] = useState('');

  // const handleChange = async (e) => {
  //     setTechnique(e.target.value);
  //     getProblems();
  //     await delay(500);
  //     setSearch(e.target.value)
  //     console.log(e.target.value)
  // };
  return (
    <div>
      {/* <WallMap id="wallmap" /> */}
      <br></br>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel sx={{ zIndex: -1 }} id="demo-simple-select-label">
            Climbing Technique
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={technique}
            label="Climbing Technique"
            // onChange={handleChange}
            defaultValue = ""
          >
            {holds.map((hold) => (
              <MenuItem key={hold.id} value={hold.id}>
                {hold.handholds}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel sx={{ zIndex: -1 }} id="demo-simple-select-label">
            Location
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue = ""
            // value={technique}
            label="Location"
            // onChange={handleChange}
          >
            {locs.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography gutterBottom>Difficulty</Typography>

        <Slider sx={{ m: 1, minWidth: 300, maxWidth:600}}
          getAriaLabel={() => "Difficulty - V"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
          step={null}
          max={12}
          //   valueLabelDisplay="on"
        />
                <br></br>
                <br></br><br></br>

      </Box>
      {/* <button onClick={() => setSearch("favorites")}>search favorite</button>
                <button onClick={() => setSearch("in progress")}>search in progress</button>
                <button onClick={() => setSearch("completed")}>search completed</button> */}
      {/* <Button variant='contained' onClick={() => {
                    setSearch("easy");
                    setTechnique("")
                }}>Sort Ascending Difficulty</Button>
                 <Button variant='contained' onClick={() => {
                    setSearch("hard");
                    setTechnique("")
                }}>Sort Ascending Difficulty</Button> */}

      {problem.map((problem) => (
        <ProblemCard
          problem={problem}
          user={user}
          alignItems="center"
          justifyContent="center"
        />
      ))}
    </div>
  );
}

export default ClimberHome;
