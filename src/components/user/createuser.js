import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div style={{ marginTop: '5em' }}>
      <Typography
        style={{
          marginLeft: '1rem',
          textAlign: 'left',
          float: 'left',
          color: 'white',
        }}
      >
        <strong>User Module</strong> <span>it all starts here</span>
      </Typography>
      <Typography
        style={{
          marginLeft: '1rem',
          textAlign: 'right',
          float: 'right',
          marginRight: '1rem',
          color: 'white',
        }}
      >
        Home-Settings-User-Create User
      </Typography>
      <hr
        style={{
          clear: 'both',
          marginBottom: '1em',
          marginTop: '1rem',
          border: '3px solid #00796b',
          background: '#00796b',
        }}
      />
      <Card
        style={{
          marginRight: '1rem',
          marginLeft: '1rem',
          borderRadius: 0,
          background: 'white',
        }}
      >
        <CardContent elevation={3}>
          <Typography variant="h6">User Create Page</Typography>
          <hr
            style={{
              marginRight: '0rem',
              marginLeft: '0rem',
              marginTop: '0',
              marginBottom: '2em',
              border: '1px solid #009688',
              background: '#009688',
            }}
          />
          <Grid container direction="row">
            <Grid item container direction="column" sm>
              <div
                style={{
                  marginRight: '50px',
                  marginBottom: '1em',
                }}
              >
                <Typography>Fullname*</Typography>
                <input
                  className="form-control"
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={handleChange}
                  label="Name"
                  required
                />
              </div>
              <div
                style={{
                  marginRight: '50px',
                  marginBottom: '1em',
                  marginTop: '1em',
                }}
              >
                <Typography>Email*</Typography>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  label="Enter Email"
                  required
                />
              </div>
            </Grid>
            <Grid item container direction="column" sm>
              <div
                style={{
                  marginRight: '50px',
                  marginBottom: '1em',
                }}
              >
                <Typography>Password*</Typography>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  label="Password"
                  required
                />
              </div>
              <div
                style={{
                  marginRight: '50px',
                  marginBottom: '1em',
                  marginTop: '1em',
                }}
              >
                <Typography>Confirm Password*</Typography>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  label="Confirm Password"
                  required
                />
              </div>
            </Grid>
          </Grid>
          <hr />
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
