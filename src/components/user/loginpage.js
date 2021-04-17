import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { emailSignInStart } from '../../redux/user/user.actions';
import { CircularProgress } from '@material-ui/core';

const SignIn = ({ emailSignInStart }) => {
  const [loading, setLoading] = useState(false);
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    setLoading(true);

    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div>
      <Typography
        component="h1"
        variant="h4"
        style={{ color: 'white', textAlign: 'center', marginTop: '2em' }}
      >
        <strong>M</strong>HT
      </Typography>
      <Container component="main" maxWidth="xs" style={{ background: 'white' }}>
        <div
          style={{
            marginTop: '2em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CssBaseline />
          <form
            style={{
              width: '100%',
              marginTop: '1em',
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="email"
              type="email"
              onChange={handleChange}
              value={email}
              label="email"
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              label="password"
              required
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                margin: '1em 0em 1em',
              }}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress />
              ) : (
                <Typography>Sign In</Typography>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
