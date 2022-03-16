import { useState } from "react";
import LoginForm from './components/LoginForm';
import SignUpForm from "./components/SignUpForm";
import ResetPasswordForm from './components/ResetPasswordForm';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Login({ onLogin }){
    const [showResetForm, setShowResetForm] = useState(false)
    const [showLogin, setShowLogin] = useState(true);

    return (        
        <Container>
        { showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <div>Don't have an account? &nbsp;
                    <Button variant="contained" onClick={() => setShowLogin(false)}>
                        Sign Up
                    </Button>
                    <Button onClick={() => setShowResetForm(!showResetForm)}  variant="contained"> {showResetForm?"Cancel Reset Password":"Reset Password"}</Button>
                    {showResetForm ? <ResetPasswordForm setShowResetForm={setShowResetForm} /> : null}
                </div>
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
</Container>
    )
}
export default Login;