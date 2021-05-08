import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, Grid } from '@material-ui/core';
import axios from 'axios';

export class StudentDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      batch: [],
      teachers: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/students/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({ students: response.data });
        console.log('student: ', this.state.students);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/teachersBatch/5f90440a838fe20a3e1520d6/5f9047de838fe20a3e1520db'
      )
      .then((response) => {
        this.setState({ batch: response.data });
        console.log('student: ', this.state.batch);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/teachers/5f90440a838fe20a3e1520d6'
      )
      .then((response) => {
        this.setState({ teachers: response.data });
        console.log('teacher: ', this.state.teachers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {
      studentPhoto,
      studentFullName,
      fatherName,
      motherName,
      studentPhoneNumber,
      guardianPhoneNumber,
      email,
      studentSchool,
      sllabys,
      specialNote,
      studentPermentId,
      checked,
      checked2,
    } = this.state.students;

    const { batchPrice } = this.state.batch;

    return (
      <div style={{ marginTop: '4em' }}>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'left',
            float: 'left',
            color: 'white',
          }}
        >
          Student Module
        </Typography>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'right',
            float: 'right',
            marginRight: '5rem',
            color: 'white',
          }}
        >
          Home-Student-Details
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00695c',
            background: '#00695c',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.7em', borderRadius: 0 }}>
          <CardContent>
            <Typography>Student Details Information </Typography>
            <hr
              style={{
                clear: 'both',
                marginBottom: '1em',
                marginTop: '0.1rem',
                border: '1px solid #00796b',
                background: '#00796b',
                width: '100%',
              }}
            />
            <Grid container direction="row">
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
                    src={studentPhoto}
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
                <br />
                <Grid container direction="row">
                  <Grid item container direction="column" sm>
                    <Typography style={{ fontWeight: 600, marginLeft: '4em' }}>
                      Student Name:
                    </Typography>
                    <Typography style={{ marginLeft: '4em' }}>
                      Permanent ID :
                    </Typography>
                  </Grid>
                  <Grid item container direction="column" sm>
                    <Typography>{studentFullName}</Typography>
                    <Typography>{studentPermentId}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container direction="column" sm>
                <Typography
                  style={{
                    fontWeight: 600,
                    marginBottom: '0.1em',
                    marginTop: '0.3em',
                  }}
                >
                  Father's Name
                </Typography>
                <Typography
                  style={{
                    marginBottom: '0.1em',
                    marginTop: '0.1em',
                  }}
                >
                  {fatherName}
                </Typography>
                <Typography
                  style={{
                    fontWeight: 600,
                    marginBottom: '0.1em',
                    marginTop: '0.3em',
                  }}
                >
                  Mother's Name
                </Typography>
                <Typography
                  style={{
                    marginBottom: '0.1em',
                    marginTop: '0.1em',
                  }}
                >
                  {motherName}
                </Typography>
                <Typography
                  style={{
                    fontWeight: 600,
                    marginBottom: '0.1em',
                    marginTop: '0.3em',
                  }}
                >
                  Student's Phone Number
                </Typography>
                <Typography
                  style={{
                    marginBottom: '0.1em',
                    marginTop: '0.1em',
                  }}
                >
                  {studentPhoneNumber}
                </Typography>
                <Typography
                  style={{
                    fontWeight: 600,
                    marginBottom: '0.1em',
                    marginTop: '0.3em',
                  }}
                >
                  Guardian's Phone Number
                </Typography>
                <Typography
                  style={{
                    marginBottom: '0.1em',
                    marginTop: '0.1em',
                  }}
                >
                  {guardianPhoneNumber}
                </Typography>
              </Grid>
              <Grid item container direction="column" sm>
                <Typography
                  style={{
                    fontWeight: 600,
                    marginBottom: '0.1em',
                    marginTop: '0.3em',
                  }}
                >
                  Email
                </Typography>
                <Typography
                  style={{
                    marginBottom: '0.1em',
                    marginTop: '0.1em',
                  }}
                >
                  {email}
                </Typography>
                <Typography
                  style={{
                    fontWeight: 600,
                    marginBottom: '0.1em',
                    marginTop: '0.3em',
                  }}
                >
                  School
                </Typography>
                <Typography
                  style={{
                    marginBottom: '0.1em',
                    marginTop: '0.1em',
                  }}
                >
                  {studentSchool}
                </Typography>
                <Typography
                  style={{
                    fontWeight: 600,
                    marginBottom: '0.1em',
                    marginTop: '0.3em',
                  }}
                >
                  Sllabys
                </Typography>
                <Typography
                  style={{
                    marginBottom: '0.1em',
                    marginTop: '0.1em',
                  }}
                >
                  {sllabys}
                </Typography>
                <Typography
                  style={{
                    fontWeight: 600,
                    marginBottom: '0.1em',
                    marginTop: '0.3em',
                  }}
                >
                  Special Note
                </Typography>
                <Typography
                  style={{
                    marginBottom: '0.1em',
                    marginTop: '0.1em',
                  }}
                >
                  {specialNote}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '0.1rem',
            border: '3px solid #00897b',
            background: '#00897b',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.7em', borderRadius: 0 }}>
          <CardContent>
            <Typography>Batch & Payment Status</Typography>
            <hr
              style={{
                clear: 'both',
                marginBottom: '1em',
                marginTop: '0.1rem',
                border: '1px solid #009688',
                background: '#009688',
                width: '100%',
              }}
            />
            <br />
            <table
              id="dtBasicExample"
              className="table table-striped table-bordered"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col">Batch Name</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Last Paid Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>{checked}</div>
                    <div>{checked2}</div>
                  </td>
                  <td>
                    <div>{batchPrice}</div>
                    <div>{batchPrice}</div>
                  </td>
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
            marginTop: '0.1rem',
            border: '3px solid #26a69a',
            background: '#26a69a',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.7em', borderRadius: 0 }}>
          <CardContent>
            <Typography>All Transaction</Typography>
            <hr
              style={{
                clear: 'both',
                marginBottom: '1em',
                marginTop: '0.1rem',
                border: '1px solid #4db6ac',
                background: '#4db6ac',
                width: '100%',
              }}
            />
            <br />
            <table
              id="dtBasicExample"
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col">Invoice Id</th>
                  <th scope="col">Payment Date</th>
                  <th scope="col">Batch name</th>
                  <th scope="col">Payment For</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
            marginTop: '0.1rem',
            border: '3px solid #80cbc4',
            background: '#80cbc4',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.7em', borderRadius: 0 }}>
          <CardContent>
            <Typography>All Refunds</Typography>
            <hr
              style={{
                clear: 'both',
                marginBottom: '1em',
                marginTop: '0.1rem',
                border: '1px solid #b2dfdb',
                background: '#b2dfdb',
                width: '100%',
              }}
            />
            <br />
            <table
              id="dtBasicExample"
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col">Invoice Id</th>
                  <th scope="col">Payment Date</th>
                  <th scope="col">Batch name</th>
                  <th scope="col">Payment For</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
      </div>
    );
  }
}

export default withRouter(StudentDetails);
