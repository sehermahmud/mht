import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export class TeacherPayment extends Component {
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
          Teacher Payment Dashboard
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
          Home-Teacher-TeacherPayment
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            color: 'white',
          }}
        />
        <Card elevation={3} style={{ borderRadius: 0, margin: '0.5em' }}>
          <CardContent>
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    margin="normal"
                    format="dd/MM/yyyy"
                    label="Reference Date"
                    style={{ marginRight: '8em' }}
                    // value={this.state.EndDate}
                    // onChange={this.onChangeEndDate}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid
                item
                container
                direction="column"
                sm
                style={{
                  marginBottom: '1em',
                  marginTop: '1.9em',
                }}
              >
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  // value={this.state.studentSchool}
                  // onChange={this.onChangeStudentSchool}
                >
                  {/* {this.state.schools.map(function (school) {
                      return (
                        <option key={school} value={school}>
                          {school}
                        </option>
                      );
                    })} */}
                  <option>Select Teacher</option>
                </select>
              </Grid>
              <Grid item container direction="column" sm>
                <Button
                  style={{
                    background:
                      'linear-gradient(45deg, #a5d6a7 30%, #4caf50 90%)',
                    marginTop: '1.9em',
                    marginLeft: '20em',
                  }}
                >
                  Show
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #009688',
            background: '#009688',
            color: 'white',
          }}
        />
        <Card elevation={3} style={{ margin: '0.5em', borderRadius: 0 }}>
          <CardContent>
            <Typography variant="h6" style={{ marginBottom: '0.8em' }}>
              Teacher Payment Summary
            </Typography>
            <div style={{ margin: 0 }}>
              <Button
                elevation={1}
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                }}
                variant="contained"
              >
                COPY
              </Button>
              <Button
                elevation={1}
                variant="contained"
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                }}
              >
                CSV
              </Button>
              <Button
                elevation={1}
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                  textTransform: 'none',
                }}
                variant="contained"
              >
                Excel
              </Button>
              <Button
                elevation={1}
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                }}
                variant="contained"
              >
                PDF
              </Button>
              <Button
                elevation={1}
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                  textTransform: 'none',
                }}
                variant="contained"
              >
                Print
              </Button>
            </div>
            <br />
            <table
              id="dtBasicExample"
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col" style={{ width: '15em' }}>
                    Batch Name
                  </th>
                  <th scope="col" style={{ width: '15em' }}>
                    Schedule
                  </th>
                  <th scope="col" style={{ width: '3em' }}>
                    Active Students
                  </th>
                  <th scope="col" style={{ width: '3em' }}>
                    Paid Students
                  </th>
                  <th scope="col" style={{ width: '3em' }}>
                    Unpaid Students
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    Expected Amount/=
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    Pending Amount/=
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    Paid Amount/=
                  </th>
                  <th scope="col" style={{ width: '3em' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {' '}
                    <Link
                      to="/teachers/teacherPaymentDetails"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        style={{
                          color: 'white',
                          background:
                            'linear-gradient(45deg, #b39ddb 30%, #673ab7 90%)',
                          textTransform: 'none',
                        }}
                      >
                        Details
                      </Button>{' '}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    );
  }
}
