import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';

export default class EditUser extends Component {
  render() {
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
          <strong>Edit User</strong>
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
          Home-Settings-User-edit User
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
            <Typography variant="h6">Edit User</Typography>
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
                    placeholder="Enter fullname"
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
                    placeholder="Enter Email"
                    type="email"
                  />
                </div>
                <div
                  style={{
                    marginRight: '50px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Role*</Typography>
                  <select class="form-control" placeholder="Select Role">
                    <option value="">Select Role</option>
                    <option id="25" value="Admin">
                      Admin
                    </option>
                    <option id="50" value="Teacher">
                      Teacher
                    </option>
                  </select>
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
                    placeholder="Enter password"
                    type="password"
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
                    placeholder="Enter password again"
                    type="password"
                  />
                </div>
              </Grid>
            </Grid>
            <hr />
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <Link to="/user/allUser">
                  <Button
                    className="btn"
                    style={{
                      color: '#2196f3',
                      border: '1px solid #2196f3',
                      textTransform: 'none',
                      textAlign: 'left',
                      float: 'left',
                    }}
                  >
                    Cancel
                  </Button>
                </Link>
              </Grid>
              <Grid item container direction="column" sm>
                <Link>
                  <Button
                    className="btn"
                    style={{
                      background: '#00e676',
                      color: 'white',
                      textTransform: 'none',
                      marginLeft: '1rem',
                      textAlign: 'right',
                      float: 'right',
                      marginRight: '1rem',
                    }}
                  >
                    Update
                  </Button>
                </Link>
              </Grid>
            </Grid>
            {/* <Grid
                item
                container
                direction="column"
                sm
              >
                <Button
                  className="btn"
                  style={{
                    background: '#00e676',
                    color: 'white',
                    textTransform: 'none',
                    marginLeft: '1rem',
            textAlign: 'right',
            float: 'right',
            marginRight: '1rem',
                  }}
                >
                  Update
                </Button>
              </Grid> */}
          </CardContent>
        </Card>
      </div>
    );
  }
}
