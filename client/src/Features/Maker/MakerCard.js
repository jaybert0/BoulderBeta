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

  
function MakerCard({difficulty, location, technique, grip_color, end_date, problem_description, id, problem, formProblem, setFormProblem, climbproblem, subproblem}) {
  const [favAdd, setFavAdd] = useState(0)
  const [inprogAdd, setinProgAdd] = useState(0)
  const [compAdd, setCompAdd] = useState(0)
  const [rating, setRating] = useState(0)
  
  const countfav = subproblem.filter(x => x.favorite ===true).length
  const countinp = subproblem.filter(x => x.in_progress ===true).length
  const countcomp = subproblem.filter(x => x.completed ===true).length

  useEffect(() => {
    setFavAdd(countfav)
    setinProgAdd(countinp)
    setCompAdd(countcomp)
    setRating(subproblem[0].route_rating)
  }, [])
  
  function deleteCard(){
    console.log(id)
    const config = {method: "DELETE"}
    fetch(`http://localhost:9292/problems/${id}`, config)
    .then((r) => r.json())
    .then((data) => console.log(data))
    window.location.reload()
  }
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Typography variant="body1" color="text.primary">
            Route: {id} <br />           
            Location: {location}
            </Typography> 
          <Typography variant="body2" color="text.secondary">
            Difficulty: V{difficulty}<br />
            Grip Color: {grip_color}<br />
            Grip Hold Highlight: {technique}<br />
            End Date: {end_date}<br />
            {/* Favorites: console.log({climbproblems.favorite})<br />
            In-Progress: console.log({climbproblems.in_progress})<br />
            Completed: console.log({climbproblems.completed})<br /> */}
            Favorites: {favAdd}<br />
            In-Progress: {inprogAdd}<br />
            Completed: {compAdd}<br />
            Rating: {rating}<br />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="delete">
            <DeleteIcon onClick={() => deleteCard()}/>
          </IconButton>
          <IconButton sx={{zIndex: 0}} aria-label="edit" onClick= {() => {
            if (problem.id === id) {
                setFormProblem({
                    id: id,
                    difficulty: difficulty,
                    grip_color: grip_color,
                    technique: technique,
                    location: location,
                    end_date: end_date,
                    problem_description: problem_description,
                    maker_id: 1,
            }
                )
            }
            
          } }>
          <EditIcon   />
          </IconButton>
      </CardActions>
    </Card>
  );
}

  export default MakerCard