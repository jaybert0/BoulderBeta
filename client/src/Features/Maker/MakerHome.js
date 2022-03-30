import ProblemForm from './ProblemForm';
import { useEffect, useState } from 'react';
import MakerCard from './MakerCard';
import { useDispatch, useSelector } from "react-redux";
import {fetchProblems} from '../Reducer/problemsSlice'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import React from 'react';

function MakerHome({problem, climbproblem, user}){
    const probData = useSelector(state => state.problems.entities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProblems());
    }, [dispatch]);
    
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    const [formProblem, setFormProblem] = useState({
        id:"",
        difficulty: "",
        grip_color: "",
        location_id: "",
        tech_id: "",
        end_date: "",
        problem_description: "",
    })
    return(
        <div>
            
            <ProblemForm problem={problem} climbProblem={climbproblem} formProblem={formProblem} setFormProblem={setFormProblem} sx={{position: 'sticky', top: 0}}/>
            <Box sx={{ justifyContent: 'flex-start'}}> 
            <br/>
            <br/>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {problem?.map(problem => (
                <Grid item xs={2} sm={4} md={4} key={problem.id} sx={{ boxShadow: 3 }}>
                <Item>
                <MakerCard
                formProblem={formProblem} 
                setFormProblem={setFormProblem}
                id={problem.id} 
                problem={problem}
                difficulty={problem.difficulty}
                technique={problem.technique}
                grip_color={problem.grip_color}
                end_date={problem.end_date}
                problem_description={problem.problem_description}
                subproblem={problem.climbproblems}
                climbproblem={climbproblem}

                />
                </Item>
                </Grid>
            ))}
            </Grid>
            </Box>
        </div>
        
    );
}

export default MakerHome