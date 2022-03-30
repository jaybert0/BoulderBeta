import { useState } from "react";
import Box from "@mui/material/Box";
import logo from '../../components/boulderbetasplash.png'
import LoginForm from './LoginForm';
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from './ResetPasswordForm';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SplashCard from '../../components/SplashCard'

function Login({ onLogin }){
    const [showResetForm, setShowResetForm] = useState(false)
    const [showLogin, setShowLogin] = useState(true);

    return (   

        <Container>
            <Box   display="flex" 
        alignItems="center"
        justifyContent="center">
            {/* <SplashCard /> */}
            <img src={logo} alt="Boulder Beta Logo" id="logo" />
            </Box>
            <Box   
            // display="flex" 
        alignItems="center"
        justifyContent="center">
        { showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <br></br>
                <Box display="flex" alignItems="center"
        justifyContent="center">Don't have an account? &nbsp;
                    <Button variant="contained" onClick={() => setShowLogin(false)}>
                        Sign Up
                    </Button>
                    <Button onClick={() => setShowResetForm(!showResetForm)}  variant="contained"> {showResetForm?"Cancel Reset Password":"Reset Password"}</Button>
                    {showResetForm ? <ResetPasswordForm setShowResetForm={setShowResetForm} /> : null}
                    <br></br><br></br>
                </Box>
            </>
        ): (
            <>
                <SignUpForm onLogin={onLogin} />
                <p>
                    Already have an account? &nbsp;
                    <Button  className="m-3" variant="contained" onClick={() => setShowLogin(true)}>
                        Log In
                    </Button>
                </p>
            </>
        )
        }
        </Box>
</Container>
    )
}
export default Login;