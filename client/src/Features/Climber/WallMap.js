import React from "react";
import wall from "./wall.png"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import grips from './grips.jpg'
import { maxHeight } from '@mui/system'
import "../../Styles/WallMap.css"

function WallMap () {
    return (
        <Container id="map" sx={{
            border: "solid black 2px",
            bgcolor: 'white',
            width: 'maxWidth'}}>
        <Box id="mapbox" sx={{
        width: 'maxWidth',
        height: maxHeight,
        backgroundColor: 'primary.main'}}>
            <img src={wall} alt="Facility Map" id="wallmap"/>
            <img src={grips} alt="Facility Map" id="wallmap"/>
        </Box>
        </Container>
    )
}

export default WallMap;