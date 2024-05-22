import React, { useState } from 'react';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import SignupLogo from '../images/signup.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        marginTop: theme.spacing(5),
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

export default function Signup() {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const nameRegex = /^[A-Za-z\s]+$/;

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        if (!nameRegex.test(e.target.value)) {
            setFirstNameError('First name can only contain letters and spaces');
        } else if (!e.target.value) {
            setFirstNameError('First name is required');
        } else {
            setFirstNameError('');
        }
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        if (!nameRegex.test(e.target.value)) {
            setLastNameError('Last name can only contain letters and spaces');
        } else if (!e.target.value) {
            setLastNameError('Last name is required');
        } else {
            setLastNameError('');
        }
    };

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

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && email && password && confirmPassword &&
            !Boolean(firstNameError) && !Boolean(lastNameError) && !Boolean(emailError) &&
            !Boolean(passwordError) && !Boolean(confirmPasswordError)) {
            alert("Account created successfully");
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <Container maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <img className={classes.logo} src={SignupLogo} alt='Signup Logo' />
                <Typography className={classes.title} variant='h4' align='center' gutterBottom style={{ fontFamily: 'Helvetica', fontSize: '2rem' }} >
                    SIGN UP
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        label='First Name'
                        variant='outlined'
                        fullWidth
                        value={firstName}
                        onChange={handleFirstNameChange}
                        error={Boolean(firstNameError)}
                        helperText={firstNameError}
                    />
                    <TextField
                        label='Last Name'
                        variant='outlined'
                        fullWidth
                        value={lastName}
                        onChange={handleLastNameChange}
                        error={Boolean(lastNameError)}
                        helperText={lastNameError}
                    />
                    <TextField
                        label='Email'
                        variant='outlined'
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        error={Boolean(emailError)}
                        helperText={emailError}
                    />
                    <TextField
                        label='Password'
                        variant='outlined'
                        fullWidth
                        type={showPassword ? 'text' : 'password'} // Toggle password visibility
                        value={password}
                        onChange={handlePasswordChange}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                        InputProps={{ // Add input adornment for visibility toggle
                            endAdornment: (
                                <Button onClick={togglePasswordVisibility}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            ),
                        }}
                    />
                    <TextField
                        label='Confirm Password'
                        variant='outlined'
                        fullWidth
                        type={showConfirmPassword ? 'text' : 'password'} // Toggle confirm password visibility
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        error={Boolean(confirmPasswordError)}
                        helperText={confirmPasswordError}
                        InputProps={{ // Add input adornment for visibility toggle
                            endAdornment: (
                                <Button onClick={toggleConfirmPasswordVisibility}>
                                    {showConfirmPassword ? 'Hide' : 'Show'}
                                </Button>
                            ),
                        }}
                    />
                    <Button className={classes.submit} variant='contained' color='primary' type='submit' fullWidth> Signup </Button>
                </form>
                <Grid container justifyContent='center'>
                    <Grid item> Already have an account?
                        <Link to='/login' className={classes.link}>
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
