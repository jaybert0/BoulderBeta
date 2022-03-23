import React from "react";
import logo from "./boulderbetasplash.png"
import Container from "@material-ui/core/Container";


function SplashCard () {
    return (
        <Container>
            <img src={logo} alt="Boulder Beta Logo" id="logo" />
        </Container>
    )
}

export default SplashCard;
