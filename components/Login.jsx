/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import GoogleButton from 'react-google-button';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box, Link, Avatar, Typography, Container,
} from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Rx Pandan
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}


export default function Login() {
  const router = useRouter();
  const { signInUser, setCurrentUser, currentUser } = useAuth();

  const handleLogin = async () => {
    const user = await signInUser();
    console.log(user);
    const { photoURL, email, displayName } = user;

    setCurrentUser({
      ...currentUser,
      photo: photoURL,
      email,
      displayName,
    });
    router.push('/Medications');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          rowGap: 2,
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <GoogleButton onClick={handleLogin} type="dark" />
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
