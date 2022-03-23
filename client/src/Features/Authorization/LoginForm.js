import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function LoginForm({onLogin}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        }).then ((r) => {
            setIsLoading(false);
            if (r.ok){
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    return (
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="off"
              autoFocus
              value = {email}

              onChange={(e) => setEmail(e.target.value)}
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}

              onChange={(e) => setPassword(e.target.value)}
            />
             <Button variant="contained" type="submit">{isLoading ? "Loading..." : "Login"}</Button>
                {/* {errors.map(error => (
                    // <Alert className="mt-3" severity="error" key={error}>{error}</Alert>
                ))} */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );

    
}

export default LoginForm;