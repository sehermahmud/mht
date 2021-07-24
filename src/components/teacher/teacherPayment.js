import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios';

export class TeacherPayment extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentSchool = this.onChangeStudentSchool.bind(this);

    this.state = {
      teachers: [],
      studentSchool: '',
      Arraychecked0: [],
      Arraychecked1: [],
      Arraychecked2: [],
      Arraychecked3: [],
      Arraychecked4: [],
      Arraychecked5: [],
      Arraychecked6: [],
      Arraychecked7: [],
      Arraychecked8: [],
      Arraychecked9: [],
      Arraychecked10: [],
      Arraychecked11: [],
      Arraychecked12: [],
      Arraychecked13: [],
      Arraychecked14: [],
    };
  }

  onChangeStudentSchool(e) {
    this.setState({ studentSchool: e.target.value });
  }

  componentDidMount() {
    axios
      .get('https://mht-backend-1.herokuapp.com/teachers/')
      .then((response) => {
        this.setState({ teachers: response.data });
        console.log(this.state.teachers);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f90440a838fe20a3e1520d6/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked0: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }

        console.log(this.state.Arraychecked0);
      });
    // Batch Biology
    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f904557838fe20a3e1520d9/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked3: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }

        console.log(this.state.Arraychecked3);
      });
    // Batch Chemistry
    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f90448a838fe20a3e1520d7/allTeacherBatch `
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked4: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }

        console.log(this.state.Arraychecked4);
      });

    // Batch Math
    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f9045af838fe20a3e1520da/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked9: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }
        console.log(this.state.Arraychecked9);
      });

    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f9045af838fe20a3e1520da/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked10: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }

        console.log(this.state.Arraychecked10);
      });

    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f9045af838fe20a3e1520da/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked11: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }

        console.log(this.state.Arraychecked11);
      });

    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f9045af838fe20a3e1520da/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked12: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }

        console.log(this.state.Arraychecked12);
      });
  }

  render() {
    const popup =
      this.state.studentSchool === 'Mir Zahidur Reza' ? (
        <React.Fragment>
          {this.state.Arraychecked0.map((students) => (
            <tr>
              <td>{students.batches2}</td>
              <td>{students.batchSchedule}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{students.batchPrice}</td>
              <td></td>
              <td></td>
              <td>
                {' '}
                <Link
                  to={'/teachers/teacherPaymentDetails/' + students._id}
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
          ))}
        </React.Fragment>
      ) : (
        <div></div>
      );

    const popup2 =
      this.state.studentSchool === 'Brendan Atkinson' ? (
        <React.Fragment>
          {this.state.Arraychecked4.map((students) => (
            <tr>
              <td>{students.batches2}</td>
              <td>{students.batchSchedule}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{students.batchPrice}</td>
              <td></td>
              <td></td>
              <td>
                {' '}
                <Link
                  to={'/teachers/teacherPaymentDetails/' + students._id}
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
          ))}
        </React.Fragment>
      ) : (
        // console.log(this.state.teachers)
        <div></div>
      );

    const popup3 =
      this.state.studentSchool === 'Md. Akramuzzaman Akram' ? (
        <React.Fragment>
          {this.state.Arraychecked3.map((students) => (
            <tr>
              <td>{students.batches2}</td>
              <td>{students.batchSchedule}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{students.batchPrice}</td>
              <td></td>
              <td></td>
              <td>
                {' '}
                <Link
                  to={'/teachers/teacherPaymentDetails/' + students._id}
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
          ))}
        </React.Fragment>
      ) : (
        // console.log(this.state.teachers)
        <div></div>
      );

    const popup4 =
      this.state.studentSchool === 'Dewan Rahul Ahmed' ? (
        <React.Fragment>
          {this.state.Arraychecked9.map((students) => (
            <tr>
              <td>{students.batches2}</td>
              <td>{students.batchSchedule}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{students.batchPrice}</td>
              <td></td>
              <td></td>
              <td>
                {' '}
                <Link
                  to={'/teachers/teacherPaymentDetails/' + students._id}
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
          ))}
        </React.Fragment>
      ) : (
        // console.log(this.state.teachers)
        <div></div>
      );
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
                  value={this.state.studentSchool}
                  onChange={this.onChangeStudentSchool}
                >
                  <option>Select Teacher</option>
                  {this.state.teachers.map(function (teacher) {
                    return (
                      <option key={teacher._id} value={teacher.teacherName}>
                        {teacher.teacherName}
                      </option>
                    );
                  })}
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
              cellSpacing="0"
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
              {this.state.studentSchool === 'Mir Zahidur Reza' ? (
                <tbody>{popup}</tbody>
              ) : null}
              {this.state.studentSchool === 'Brendan Atkinson' ? (
                <tbody>{popup2}</tbody>
              ) : null}
              {this.state.studentSchool === 'Md. Akramuzzaman Akram' ? (
                <tbody>{popup3}</tbody>
              ) : null}
              {this.state.studentSchool === 'Dewan Rahul Ahmed' ? (
                <tbody>{popup4}</tbody>
              ) : null}
            </table>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(TeacherPayment);
