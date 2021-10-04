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
      batch09: [],
      teachers: [],
      hello: 'hello',
      we: '',
      alina: '',
      hellose: 'mina',
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://mht-backend-1.herokuapp.com/students/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          students: response.data,
          // batch: response.data.Batch.map((batch) => batch),
          // // batch: response.data.Batch[0],
        });
        console.log('student: ', this.state.students);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        'https://mht-backend-1.herokuapp.com/students/' +
          this.props.match.params.id
      )
      .then((response) => {
        if (response.data.Batch.length > 0) {
          this.setState({
            batch: response.data.Batch.map((batch) => batch),
          });
        }
        console.log('studentBatch: ', this.state.batch);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        'https://mht-backend-1.herokuapp.com/students/' +
          this.props.match.params.id
      )
      .then((response) => {
        if (response.data.Batch09.length > 0) {
          this.setState({
            batch09: response.data.Batch09.map((batch) => batch),
          });
        }
        console.log('studentBatch09: ', this.state.batch09);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      // studentPhoto,
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
    } = this.state.students;

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
                    // src={studentPhoto}
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
                {/* {console.log(this.state.batch09)} */}
                {this.state.batch09.map((thebatch) =>
                  thebatch.open1 === '' ? (
                    <tr key={thebatch._id}></tr>
                  ) : (
                    <tr key={thebatch._id}>
                      <td value={thebatch.open1}>{thebatch.open1}</td>
                      <td value={thebatch.open2}>{thebatch.open2}</td>
                      <td value={thebatch.open4}>
                        {thebatch.open4 && thebatch.open4.substring(0, 10)}
                      </td>
                    </tr>
                  )
                )}
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
              cellSpacing="0"
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
              cellSpacing="0"
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
