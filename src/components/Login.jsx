// components/Login.js
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginLogo from '../images/account.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        marginTop: theme.spacing(15),

    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    submit: {
        marginTop: theme.spacing(2),
        backgroundImage: 'linear-gradient(to right, #2EB8BF, #8F6DD8)',
        color: '#fff',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    title: {
        marginBottom: theme.spacing(4),
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: theme.spacing(2),
    },
}));


export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password && !Boolean(emailError) && !Boolean(passwordError)) {
            alert('Login successful');
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <img className={classes.logo} src={LoginLogo} alt="Login Logo" />
                <Typography className={classes.title} variant="h4" align="center" gutterBottom style={{ fontFamily: 'Helvetica', fontSize: '2rem' }}>
                    LOG IN
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        error={Boolean(emailError)}
                        helperText={emailError}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                    />
                    <Button
                        className={classes.submit}
                        variant="contained"
                        type="submit"
                        fullWidth
                    >
                        Login
                    </Button>
                </form>
                <Grid container justifyContent="center">
                    <Grid item>
                        Don't have an account?{' '}
                        <Link to="/signup" className={classes.link}>
                            Signup
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
