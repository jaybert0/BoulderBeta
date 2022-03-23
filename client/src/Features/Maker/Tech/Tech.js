import * as React from "react";
import { useState, useEffect } from "react";
import TechForm from "./TechForm";
import TechCard from "./TechCard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";


function Tech() {
    const [techData, setTechData] = useState([])
    const [techForm, setTechForm] = useState({
      id: "",
      handholds: "",
      hold_description: "",
  })
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  useEffect(() => {
    fetch("/teches")
      .then((r) => r.json())
      .then((data) => setTechData(data));
  }, []);

  return (
    <div>
      <TechForm
        sx={{ position: "sticky", top: 0 }} techForm={techForm} setTechForm={setTechForm}
      />
      <Box sx={{ justifyContent: "flex-start" }}>
        <br />
        <br />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {techData.map((tech) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={tech.id}
              sx={{ boxShadow: 3 }}
            >
              <Item>
                <TechCard 
                tech={tech}
                id={tech.id} 
                handholds={tech.handholds} 
                description={tech.hold_description}  
                techForm={techForm}
                setTechForm={setTechForm}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Tech;
