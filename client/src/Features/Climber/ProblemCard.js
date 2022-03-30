import * as React from "react";
import { Alert } from '@mui/material';
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import ReactStars from "react-stars";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import PendingIcon from "@mui/icons-material/Pending";
import "../../Styles/ProblemCard.css";

function ProblemCard({
  // id,
  // difficulty,
  // location,
  // technique,
  // grip_color,
  // end_date,
  // problem_description,
  problem,
  user,
  filterLoc
}) {
  const [routeRating, setRouteRatingState] = useState("");
  const label = {
    inputProps: { "aria-label": "Favorite/InProgress/Completed" },
  };

  function setRouteRating(e) {
    setRouteRatingState(e);
    handleSetProblem("rating", e);
  }

  function handleSetProblem(att, input) {
    setSubmitter({ ...submitter, [att]: input });
  }

  const [climberFeedback, setClimberFeedbackState] = useState("");
  function setClimberFeedback(e) {
    setClimberFeedbackState(e.target.value)
    handleSetProblem("feedback", e.target.value);
  }
  const [fav, setFavState] = useState(false);
  function setFavorite() {
    setFavState(!fav);
    handleSetProblem("favorite", fav);

  }
  const [inProg, setInProgressState] = useState(false);
  function setInProgress() {
    setInProgressState(!inProg);
    handleSetProblem("in_progress", inProg);

  }
// need to map out climbproblems and be left with user ids to map out to problemscards


const trialUserId = problem.climbproblems
let usersearch = trialUserId.filter((use) => use.user.id === user.id)



const [submitter, setSubmitter] = useState(
  {user_id: user.id,
    problem_id: problem.id,
    in_progress: false,
    favorite: false,
    feedback: "",
    rating: 0} 
);

useEffect(() => {
if (usersearch.length !== 0) {
  const initialstate = {
    user_id: user.id,
    problem_id: problem.id,
    in_progress: usersearch[0].in_progress,
      
    favorite: usersearch[0].favorite,
    feedback: usersearch[0].feedback,
    rating: usersearch[0].rating,
  }
  // const initialstate = {
  //   user_id: user.id,
  //   problem_id: problem.id,
  //   in_progress: usersearch[0]
  //     ? usersearch[0].in_progress
  //     : false,
  //   favorite: usersearch[0]
  //     ? usersearch[0].favorite
  //     : false,
  //   feedback: usersearch[0] ? usersearch[0].feedback : "",
  //   rating: usersearch[0] ? usersearch[0].rating : 0,
  // }
  console.log("Patch");
  // console.log(initialstate);
  setSubmitter(initialstate)
// console.log(submitter)
} else {

  const initialstate = {
    user_id: user.id,
    problem_id: problem.id,
    in_progress: false,
    favorite: false,
    feedback: "",
    rating: 0
  }
  setSubmitter(initialstate)
  console.log("Post")
}},[filterLoc])
console.log(submitter)



  function postFeedback(e) {

    if (usersearch.length !==0) {
      fetch(`/climbproblems/${usersearch[0].id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitter),
      })
        .then((r) => r.json())
        .then((data) => console.log(data));
        console.log("PATCH ATTEMPT")
    } else {
      fetch("/climbproblems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitter),
      })
        .then((r) => r.json())
        .then((data) => console.log(data));
      console.log("POST ATTEMPT")

    }
    window.location.reload();

  }
  return (
    <Box
      class="box"
      sx={{
        minWidth: 275,
        backgroundColor: "#2A9CBF",
      }}
      onSubmit={postFeedback}
    >
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {problem.problem_description}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Difficulty: V{problem.difficulty}
            </Typography>
            <Typography variant="body2">
              Location: {problem.location.location}
              <br />
              Grip Color: {problem.grip_color}
              <br />
              Grip Hold Highlight: {problem.tech.handholds}
              <br />
              End Date: {problem.end_date}
            </Typography>
          </CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
              justifyContent: "center",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{ zIndex: 0 }}
              name="climber feedback"
              value={submitter.feedback}
              onChange={(e) => {
                handleSetProblem("feedback", e.target.value);
              }}
              id="filled-basic"
              label="Please add comments about the route"
              variant="filled"
            />
            {/* <Button onSubmit={submitFeedback} size="small" variant="contained" color="primary" type="submit">
        Submit
    </Button> */}
          </Box>
          <Typography variant="body2">
            Please rate the route (⭐️Unsatisfactory | ⭐️⭐️⭐️⭐️⭐️ - Great)
          </Typography>
          <Grid container justifyContent="center">
            <ReactStars
              name="route rating"
              count={5}
              value={submitter.rating}
              onChange={(e) => handleSetProblem("rating", e)}
              size={24}
              color2={"#ffd700"}
            />
          </Grid>
          <Grid container justifyContent="center">
            <Typography variant="body2">
              Favorite:
              <Checkbox
                name="favorite"
                onChange={setFavorite}
                {...label}
                value={submitter.favorite}
                checked={submitter.favorite}
                // {
                //   // (climbproblem[0] ? climbproblem[0].favorite : false)
                //   submitter.favorite
                //   }
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                label="Favorite"
                sx={{ transform: "scale(1.5" }}
              />
              In progress:
              <Checkbox
                name="in progress"
                onChange={setInProgress}
                {...label}
                value={submitter.in_progress}

                checked={
                  submitter.in_progress
                }
                icon={<PendingOutlinedIcon />}
                checkedIcon={<PendingIcon />}
                label="In Progress"
              />
              <Button variant="contained" onClick={() => postFeedback()}>
                Submit
              </Button>
              {/* Completed:
        <Checkbox name="completed" onClick={setCompleted} {...label}  checked={complete} icon={<AssignmentTurnedInOutlinedIcon />} checkedIcon={<AssignmentTurnedInIcon />} label="Completed"/> */}
            </Typography>
          </Grid>
        </React.Fragment>
      </Card>
      
    </Box>
  );
}

export default ProblemCard;