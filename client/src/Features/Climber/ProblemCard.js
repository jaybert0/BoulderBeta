import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ReactStars from 'react-stars';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import PendingIcon from '@mui/icons-material/Pending';
import '../../Styles/ProblemCard.css'
  
  function ProblemCard({id, difficulty, location, technique, grip_color, end_date, problem_description, problem, user}) {
    const [routeRating, setRouteRatingState] = useState("")

    const label = { inputProps: { 'aria-label': 'Favorite/InProgress/Completed' } };
    const cppost = {
      user_id: user.id,
      problem_id: id,
      favorite: false,
      in_progress: false,
      rating: 0,
      feedback: ""
  }
  useEffect(() => {
    if(problem.climbproblems[0] === undefined){
     fetch('/climbproblems', {
       method: "POST",
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(cppost)
     })
     .then(r => r.json())
     .then((data) => console.log(data))
    
    }
    
  },[])

    function setRouteRating(e){
      setRouteRatingState(e)
      handleSetProblem("rating", e)
    }

  
  function handleSetProblem(att, input) {
    setSubmitter({...submitter, [att]: input});
  };

    const [climberFeedback, setClimberFeedbackState] = useState("")
    function setClimberFeedback(e){
      // setClimberFeedbackState(e.target.value)
      handleSetProblem("feedback", e.target.value)
    }
    const [fav, setFavState] = useState(false)
    function setFavorite(){
      setFavState(!fav)
      handleSetProblem("favorite", fav)
      // console.log(fav)
    }
    
    const [inProg, setInProgressState] = useState(false)
    function setInProgress(){
      setInProgressState(!inProg)
      handleSetProblem("in_progress", inProg)
      // console.log(inProg)
    }

    const [submitter, setSubmitter] = useState({
      in_progress: (problem.climbproblems[0] ? problem.climbproblems[0].in_progress : false),
      favorite: (problem.climbproblems[0] ? problem.climbproblems[0].favorite : false),
      feedback: (problem.climbproblems[0] ? problem.climbproblems[0].feedback : ""),
      rating: (problem.climbproblems[0] ? problem.climbproblems[0].rating : 0)
  })
  console.log(submitter)

 

    // const [canRun, setCanRun]= useState(false)
    // climbproblem.map((climbproblem) => {
    //   if(climbproblem.problem_id === id){
    //     if(canRun === false){
    //       setFavState(climbproblem.favorite)
    //       // handleSetProblem("favorite", climbproblem.favorite)
    //       // handleSetProblem("climber_feedback", climbproblem.climber_feedback)
    //       // handleSetProblem("in_progress", climbproblem.in_progress)
    //       // handleSetProblem("completed", climbproblem.completed)
    //       // handleSetProblem("route_rating", climbproblem.route_rating)
    //       setClimberFeedbackState(climbproblem.feedback)
    //       setInProgressState(climbproblem.in_progress)
    //       // setCompletedState(climbproblem.completed)
    //       setRouteRatingState(climbproblem.rating)
    //       setSubmitter({
    //         in_progress: climbproblem.in_progress,
    //         favorite: climbproblem.favorite,
    //         // completed: climbproblem.completed,
    //         feedback: climbproblem.feedback,
    //         rating: climbproblem.rating})
    //       setCanRun(true)
    //     }else{
    //       console.log("already mounted")
    //     }
    //     // console.log(climbproblem.problem_id)
    //     // console.log(climbproblem.favorite)
    //     // console.log(climbproblem.in_progress)
    //     // console.log(climbproblem.completed)
    //     // console.log(climbproblem.route_rating)
    //   }else{
    //     console.log("not the droid you are looking for")
    //   }
    // })
    
 

// console.log(problem)
// console.log(problem.problem_description)
// console.log(problem.climbproblems[0])

  function postFeedback(e){
    // e.preventDefault();
    fetch(`/climbproblems/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(submitter)
    })
    .then(r => r.json())
    .then((data) => console.log(data))
  };


    return (
      <Box class="box" sx={{ 
          minWidth: 275,
          backgroundColor: '#2A9CBF',
          
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
        Location: {problem.location.location}<br />
        Grip Color: {problem.grip_color}<br />
        Grip Hold Highlight: {problem.tech.handholds}<br />
        End Date: {problem.end_date}
        </Typography>
      </CardContent>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
        justifyContent: 'center',
        alignItems: "center"
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField
      sx={{zIndex: 0}}
      name="climber feedback" 
      value={submitter.feedback}
      onChange={(e) => {
        handleSetProblem("feedback", e.target.value)
     
      }}
   
      id="filled-basic" 
      label="Please add comments about the route" 
      variant="filled" />
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
        value={

          submitter.rating
        }
        onChange={(e) => handleSetProblem("rating", e)}
        size={24}
        color2={'#ffd700'} />
        </Grid>
    <Grid container justifyContent="center">
      <Typography variant="body2">
        Favorite:
        <Checkbox name="favorite" onChange={setFavorite} {...label} checked={submitter.favorite}
        // {
        //   // (climbproblem[0] ? climbproblem[0].favorite : false)
        //   submitter.favorite
        //   } 
          icon={<FavoriteBorder />} checkedIcon={<Favorite />} label="Favorite" sx={{transform: 'scale(1.5'}}/>
        In progress:
        <Checkbox name="in progress" onChange={setInProgress} {...label}  checked={
          // (climbproblem[0] ? climbproblem[0].in_progress : 0)
          submitter.in_progress
          } icon={<PendingOutlinedIcon />} checkedIcon={<PendingIcon />} label="In Progress"/>
        <Button variant='contained' onClick={()=>postFeedback()}>Submit</Button>
        {/* Completed:
        <Checkbox name="completed" onClick={setCompleted} {...label}  checked={complete} icon={<AssignmentTurnedInOutlinedIcon />} checkedIcon={<AssignmentTurnedInIcon />} label="Completed"/> */}
        </Typography>
      </Grid>
    </React.Fragment>
        </Card>
      </Box>
    );
  }


export default ProblemCard










