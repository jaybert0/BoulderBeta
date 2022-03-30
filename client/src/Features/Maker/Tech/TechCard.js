import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteTech } from "../../Reducer/techesSlice";

function TechCard({ id, handholds, description, techForm, setTechForm, tech }) {
  const dispatch = useDispatch();

  function deleteCard(techId) {
    dispatch(deleteTech(techId));
    window.location.reload();
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          ID: {id} <br />
          Handholds: {handholds} <br />
          Description: {description} <br />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete" onClick={() => deleteCard(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          sx={{ zIndex: 0 }}
          aria-label="edit"
          onClick={() => {
            if (tech.id === id) {
              setTechForm({
                id: id,
                handholds: tech.handholds,
                hold_description: tech.hold_description,
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

export default TechCard;
