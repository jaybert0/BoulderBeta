import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function MakerCard({
  difficulty,
  user,
  location,
  technique,
  grip_color,
  end_date,
  problem_description,
  id,
  problem,
  formProblem,
  setFormProblem,
  climbproblem,
  subproblem,
}) {
  const [favAdd, setFavAdd] = useState(0);
  const [inprogAdd, setinProgAdd] = useState(0);
  const [rating, setRating] = useState(0);

  const countfav = subproblem.filter((x) => x.favorite === true).length;
  const countinp = subproblem.filter((x) => x.in_progress === true).length;
  // const countcomp = subproblem.filter(x => x.completed ===true).length
  const crating = subproblem.map((x) => x.rating);
  const avgRating = crating.reduce((a, b) => a + b, 0) / crating.length;

  useEffect(() => {
    setFavAdd(countfav);
    setinProgAdd(countinp);
    // setCompAdd(countcomp)
    setRating(avgRating);
  }, []);

  function deleteCard() {
    console.log(id);
    const config = { method: "DELETE" };
    fetch(`problems/${id}`, config)
      .then((r) => r.json())
      .then((data) => console.log(data));
    window.location.reload();
  }
  // console.log(technique)
  // console.log(problem.location["id"])
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          Route: {id} <br />
          Location: {problem.location.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Difficulty: V{difficulty}
          <br />
          Grip Color: {grip_color}
          <br />
          Grip Hold Highlight: {problem.tech.handholds}
          <br />
          End Date: {end_date}
          <br />
          Favorites: {favAdd}
          <br />
          In-Progress: {inprogAdd}
          <br />
          Rating: {rating}
          <br />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete" onClick={() => deleteCard()}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          sx={{ zIndex: 0 }}
          aria-label="edit"
          onClick={() => {
            if (problem.id === id) {
              setFormProblem({
                id: id,
                difficulty: difficulty,
                grip_color: grip_color,
                tech_id: problem.tech["id"],
                location_id: problem.location["id"],
                end_date: end_date,
                problem_description: problem_description,
                // maker_id: 1,
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

export default MakerCard;
