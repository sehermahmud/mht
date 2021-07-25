import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import axios from 'axios';
// import Select from 'react-select';

export class BatchPayments extends Component {
  constructor(props) {
    super(props);
    this.onChangestudent = this.onChangestudent.bind(this);

    this.state = {
      allstudents: [],
      students: '',
      _id: '',
      studentSchool: '',
      fatherName: '',
      motherName: '',
      studentPhoneNumber: '',
      guardianPhoneNumber: '',
      email: '',
      studentDetails: [],
      showInfoButton: false,
      batch: [],
    };
  }

  onChangestudent(e) {
    this.setState({ students: e.target.value });
  }

  showInfoButtonOpen = () => {
    this.setState({ showInfoButton: true });
  };

  componentDidMount() {
    axios
      .get('https://mht-backend-1.herokuapp.com/students')
      .then((response) => {
        this.setState({
          studentDetails: response.data.map((student) => student),
          allstudents: response.data,
        });
        console.log(this.state.allstudents);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('https://mht-backend-1.herokuapp.com/students')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            batch: response.data.map((batch) => batch.Batch),
          });
        }
        console.log('studentBatch: ', this.state.batch);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const popup =
      this.state.students === 'shamila nuzrat khan' ? (
        <React.Fragment>
          <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
            <CardContent>
              <Typography variant="h6">Student Information</Typography>
              <hr />
              <br />
              <Grid
                container
                direction="row"
                key={this.state.allstudents[0]._id}
              >
                <Grid item container direction="column" sm>
                  <div
                    style={{
                      width: '10em',
                      height: '10em',
                      marginTop: '1rem',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginBottom: '1em',
                    }}
                  >
                    <img
                      src=""
                      alt="student"
                      style={{
                        border: '1px solid black',
                        width: '10em',
                        height: '10em',
                        objectFit: 'cover',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                    >
                      School Name: {this.state.allstudents[0].studentSchool}
                    </Typography>
                  </div>
                </Grid>
                <Grid item container direction="column" sm>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Student's Name:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[0].studentFullName}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Father's Name:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[0].fatherName}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Mother's Name:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[0].motherName}
                    </Typography>
                  </div>
                </Grid>
                <Grid item container direction="column" sm>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Student's Phone Number:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[0].studentPhoneNumber}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Guardian's Phone Number:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[0].guardianPhoneNumber}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Email:
                    </Typography>
                    <Typography>{this.state.allstudents[0].email}</Typography>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <hr
            style={{
              clear: 'both',
              marginBottom: '1em',
              marginTop: '1rem',
              border: '3px solid #80cbc4',
              background: '#80cbc4',
              width: '100%',
            }}
          />
          <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
            <CardContent>
              <Typography variant="h6">Payment</Typography>
              <br />
              <RadioGroup aria-label="gender" name="gender1">
                <table
                  className="table table-striped table-bordered"
                  cellSpacing="0"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '8em' }}>
                        Batch Name
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        Payment form
                      </th>
                      <th scope="col" style={{ width: '3em' }}>
                        Unit Price/=
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        no. of month
                      </th>
                      <th scope="col" style={{ width: '9em' }}>
                        Total Price Per Course /=
                      </th>
                      <th scope="col" style={{ width: '3em' }}>
                        Regular
                      </th>
                      <th scope="col" style={{ width: '3em' }}>
                        Due
                      </th>
                      <th scope="col" style={{ width: '3em' }}>
                        Discount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.batch[0].map(function (thebatch) {
                      return (
                        <tr>
                          <td key={thebatch} value={thebatch}>
                            {thebatch}
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                            <select className="custom-select">
                              <option value="0">0</option>
                              <option value="1">1</option>

                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </td>
                          <td></td>
                          <td>
                            <FormControlLabel
                              style={{
                                marginLeft: 0,
                                marginRight: 0,
                                '&$checked': {
                                  color: '#4B8DF8',
                                },
                              }}
                              value="reguler1"
                              control={<Radio disableRipple />}
                            />
                          </td>
                          <td>
                            <div className="input-group">
                              <FormControlLabel
                                style={{
                                  marginLeft: 0,
                                  marginRight: 0,
                                  '&$checked': {
                                    color: '#4B8DF8',
                                  },
                                }}
                                value="hello1"
                                control={<Radio />}
                              />
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Text input with radio button"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="input-group">
                              <FormControlLabel
                                style={{
                                  marginLeft: 0,
                                  marginRight: 0,
                                  '&$checked': {
                                    color: '#4B8DF8',
                                  },
                                }}
                                value="hi1"
                                control={<Radio />}
                              />
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Text input with radio button"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </RadioGroup>
            </CardContent>
          </Card>
        </React.Fragment>
      ) : (
        <div></div>
      );

    const popup2 =
      this.state.students === 'Karina kapoor' ? (
        <React.Fragment>
          <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
            <CardContent>
              <Typography variant="h6">Student Information</Typography>
              <hr />
              <br />
              <Grid
                container
                direction="row"
                key={this.state.allstudents[1]._id}
              >
                <Grid item container direction="column" sm>
                  <div
                    style={{
                      width: '10em',
                      height: '10em',
                      marginTop: '1rem',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginBottom: '1em',
                    }}
                  >
                    <img
                      src=""
                      alt="student"
                      style={{
                        border: '1px solid black',
                        width: '10em',
                        height: '10em',
                        objectFit: 'cover',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                    >
                      School Name: {this.state.allstudents[1].studentSchool}
                    </Typography>
                  </div>
                </Grid>
                <Grid item container direction="column" sm>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Student's Name:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[1].studentFullName}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Father's Name:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[1].fatherName}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Mother's Name:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[1].motherName}
                    </Typography>
                  </div>
                </Grid>
                <Grid item container direction="column" sm>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Student's Phone Number:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[1].studentPhoneNumber}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Guardian's Phone Number:
                    </Typography>
                    <Typography>
                      {this.state.allstudents[1].guardianPhoneNumber}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Email:
                    </Typography>
                    <Typography>{this.state.allstudents[1].email}</Typography>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <hr
            style={{
              clear: 'both',
              marginBottom: '1em',
              marginTop: '1rem',
              border: '3px solid #80cbc4',
              background: '#80cbc4',
              width: '100%',
            }}
          />
          <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
            <CardContent>
              <Typography variant="h6">Payment</Typography>
              <br />
              <RadioGroup aria-label="gender" name="gender1">
                <table
                  className="table table-striped table-bordered"
                  cellSpacing="0"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '8em' }}>
                        Batch Name
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        Payment form
                      </th>
                      <th scope="col" style={{ width: '3em' }}>
                        Unit Price/=
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        no. of month
                      </th>
                      <th scope="col" style={{ width: '9em' }}>
                        Total Price Per Course /=
                      </th>
                      <th scope="col" style={{ width: '3em' }}>
                        Regular
                      </th>
                      <th scope="col" style={{ width: '3em' }}>
                        Due
                      </th>
                      <th scope="col" style={{ width: '3em' }}>
                        Discount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.batch[1].map(function (thebatch) {
                      return (
                        <tr>
                          <td key={thebatch} value={thebatch}>
                            {thebatch}
                          </td>
                          <td>{}</td>
                          <td></td>
                          <td>
                            <select className="custom-select">
                              <option value="0">0</option>
                              <option value="1">1</option>

                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </td>
                          <td></td>
                          <td>
                            <FormControlLabel
                              style={{
                                marginLeft: 0,
                                marginRight: 0,
                                '&$checked': {
                                  color: '#4B8DF8',
                                },
                              }}
                              value="reguler2"
                              control={<Radio disableRipple />}
                            />
                          </td>
                          <td>
                            <div className="input-group">
                              <FormControlLabel
                                style={{
                                  marginLeft: 0,
                                  marginRight: 0,
                                  '&$checked': {
                                    color: '#4B8DF8',
                                  },
                                }}
                                value="hello2"
                                control={<Radio />}
                              />
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Text input with radio button"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="input-group">
                              <FormControlLabel
                                style={{
                                  marginLeft: 0,
                                  marginRight: 0,
                                  '&$checked': {
                                    color: '#4B8DF8',
                                  },
                                }}
                                value="hi2"
                                control={<Radio />}
                              />
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Text input with radio button"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </RadioGroup>
            </CardContent>
          </Card>
        </React.Fragment>
      ) : (
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
          Batch Payment Dashboard
        </Typography>
        <Typography
          style={{
            textAlign: 'right',
            float: 'right',
            marginRight: '1rem',
            color: 'white',
          }}
        >
          Home-Student-Payment-StudentPaymentPage
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            width: '100%',
          }}
        />
        <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
          <CardContent>
            <Typography variant="h6" style={{ marginBottom: '0.5em' }}>
              Search for a Student
            </Typography>
            <Grid container direction="row">
              <Grid
                item
                container
                direction="column"
                sm
                // style={{ marginTop: '2em' }}
                // style={{ zIndex: 1302 }}
                style={{ marginRight: '1em' }}
              >
                <label htmlFor="exampleInputEmail1">Student</label>
                <select
                  className="custom-select mr-sm-2"
                  value={this.state.students}
                  onChange={this.onChangestudent}
                >
                  <option defaultChecked>Choose...</option>
                  {this.state.allstudents.map((students) => (
                    <React.Fragment>
                      <option
                        key={students._id}
                        value={students.studentFullName}
                      >
                        {students.studentFullName}
                      </option>
                    </React.Fragment>
                  ))}
                </select>
                {/* <span>Selected option: {this.state.students}</span> */}
                {console.log(`Selected option: ${this.state.students}`)}
              </Grid>
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginLeft: '1em', marginRight: '1em' }}
              >
                {' '}
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Phone Number</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Number"
                  />
                </div>{' '}
              </Grid>
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginLeft: '1em' }}
              >
                <Grid container direction="row">
                  <Grid
                    item
                    container
                    direction="column"
                    sm
                    style={{ marginRight: '1em' }}
                  >
                    <Button
                      onClick={this.showInfoButtonOpen}
                      style={{
                        textTransform: 'none',
                        marginTop: '2em',
                        color: 'white',
                        background:
                          'linear-gradient(45deg, #1b5e20 30%, #4caf50 90%)',
                      }}
                    >
                      Show Info
                    </Button>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    sm
                    // style={{ marginTop: '2em' }}
                    // style={{ zIndex: 1302 }}
                    style={{ marginLeft: '1em' }}
                  >
                    <Button
                      style={{
                        textTransform: 'none',
                        marginTop: '2em',
                        color: 'white',
                        background:
                          'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
                      }}
                    >
                      Show Due
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00897b',
            background: '#00897b',
            width: '100%',
          }}
        />
        <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
          <CardContent>
            <Typography variant="h6">Due Information</Typography>
            <br />
            <table
              className="table table-striped table-bordered"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col" style={{ width: '4em' }}>
                    Batch
                  </th>
                  <th scope="col" style={{ width: '4em' }}>
                    Name
                  </th>
                  <th scope="col" style={{ width: '4em' }}>
                    PaymentDate
                  </th>
                  <th scope="col" style={{ width: '4em' }}>
                    Duefor
                  </th>
                  <th scope="col" style={{ width: '4em' }}>
                    PaidAmount
                  </th>
                  <th scope="col" style={{ width: '4em' }}>
                    DueAmount
                  </th>
                  <th scope="col" style={{ width: '4em' }}>
                    Clear
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
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #26a69a',
            background: '#26a69a',
            width: '100%',
          }}
        />
        <hr style={{ clear: 'both', marginBottom: '1rem' }} />
        {this.state.students === 'shamila nuzrat khan' ? (
          <div>{popup}</div>
        ) : null}
        {this.state.students === 'Karina kapoor' ? <div>{popup2}</div> : null}
      </div>
    );
  }
}

export default withRouter(BatchPayments);
