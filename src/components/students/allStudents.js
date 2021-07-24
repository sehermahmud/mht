import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent } from '@material-ui/core';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

export class AllStudents extends Component {
  constructor(props) {
    super(props);

    // this.handleChange15 = this.handleChange15.bind(this);
    this.onChangeStudentFullName = this.onChangeStudentFullName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFatherName = this.onChangeFatherName.bind(this);
    this.onChangeMotherName = this.onChangeMotherName.bind(this);
    this.onChangeStudentPhoneNumber =
      this.onChangeStudentPhoneNumber.bind(this);
    this.onChangeGuardianPhoneNumber =
      this.onChangeGuardianPhoneNumber.bind(this);
    this.onChangeSpecialNote = this.onChangeSpecialNote.bind(this);
    this.onChangeStudentPhoto = this.onChangeStudentPhoto.bind(this);
    this.onChangeStudentSchool = this.onChangeStudentSchool.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeSllabys = this.onChangeSllabys.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      studentFullName: '',
      email: '',
      fatherName: '',
      motherName: '',
      studentPhoneNumber: '',
      guardianPhoneNumber: '',
      specialNote: '',
      studentPhoto: '',
      studentSchool: '',
      sllabys: '',
      subject: '',
      StartDate: new Date(),
      students: [],
      query: '',
      filteredData: [],
      password: '',
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeStudentFullName(e) {
    this.setState({
      studentFullName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeFatherName(e) {
    this.setState({
      fatherName: e.target.value,
    });
  }

  onChangeMotherName(e) {
    this.setState({
      motherName: e.target.value,
    });
  }

  onChangeStudentPhoneNumber(e) {
    this.setState({
      studentPhoneNumber: e.target.value,
    });
  }

  onChangeGuardianPhoneNumber(e) {
    this.setState({
      guardianPhoneNumber: e.target.value,
    });
  }

  onChangeSpecialNote(e) {
    this.setState({
      specialNote: e.target.value,
    });
  }

  onChangeStudentPhoto(e) {
    this.setState({
      studentPhoto: e.target.value,
    });
  }

  onChangeStudentSchool(e) {
    this.setState({
      studentSchool: e.target.value,
    });
  }

  onChangeSllabys(e) {
    this.setState({
      sllabys: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  onChangeStartDate(e) {
    this.setState({
      StartDate: e.target.value,
    });
  }

  handleInputChange = (event) => {
    const query = event.target.value;

    this.setState((prevState) => {
      const filteredData = prevState.students.filter((student) => {
        return (
          student.studentFullName.toLowerCase().includes(query.toLowerCase()) ||
          student.studentPhoneNumber
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          student.guardianPhoneNumber
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          student.specialNote.toLowerCase().includes(query.toLowerCase()) ||
          student.email.toLowerCase().includes(query.toLowerCase())
        );
      });

      return {
        query,
        filteredData,
      };
    });
  };

  getData = () => {
    fetch('https://mht-backend-1.herokuapp.com/students/')
      .then((response) => response.json())
      .then((students) => {
        const { query } = this.state;
        const filteredData = students.filter((student) => {
          return (
            student.studentFullName
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            student.studentPhoneNumber
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            student.guardianPhoneNumber
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            student.specialNote.toLowerCase().includes(query.toLowerCase()) ||
            student.email.toLowerCase().includes(query.toLowerCase())
          );
        });

        this.setState({
          students,
          filteredData,
        });
      });
  };

  componentDidMount() {
    axios
      .get('https://mht-backend-1.herokuapp.com/students/')
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(this.state);
  }

  deleteStudent(id) {
    console.log('delete');
  }

  render() {
    const userAttributes = [];
    this.state.students.forEach((el, id) => {
      userAttributes.push({
        StudentName: el.studentFullName,
        StudentNumber: el.studentPhoneNumber,
        GuardianNumber: el.guardianPhoneNumber,
        SpecialNote: el.specialNote,
        emailAddress: el.email,
        Actions: (
          <React.Fragment>
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #311b92 30%, #673ab7 90%)',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                marginTop: '0.3em',
                marginBottom: '0.3em',
                textTransform: 'none',
                fontSize: '0.9em',
              }}
            >
              <Link
                style={{
                  color: 'white',
                }}
                className="text-decoration-none"
                to={'/students/StudentDetails/' + el._id}
              >
                Details
              </Link>
            </Button>
            <Button
              style={{
                color: 'white',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                marginTop: '0.3em',
                marginBottom: '0.3em',
                background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
                textTransform: 'none',
                fontSize: '0.9em',
              }}
            >
              <Link
                style={{
                  color: 'white',
                }}
                className="text-decoration-none"
                to={'/editStudent/' + el._id}
              >
                Edit
              </Link>
            </Button>
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                marginTop: '0.3em',
                marginBottom: '0.3em',
                textTransform: 'none',
                fontSize: '0.9em',
              }}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <Typography
                className="text-decoration-none"
                style={{
                  color: 'white',
                }}
              >
                Delete
              </Typography>
            </Button>
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #212121 30%, #757575 90%)',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                marginTop: '0.3em',
                marginBottom: '0.3em',
                textTransform: 'none',
                fontSize: '0.9em',
              }}
            >
              <Typography
                className="text-decoration-none"
                href="#"
                style={{
                  color: 'white',
                }}
              >
                Invoice Update
              </Typography>
            </Button>
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #3e2723 30%, #795548 90%)',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                marginTop: '0.3em',
                marginBottom: '0.3em',
                textTransform: 'none',
                fontSize: '0.9em',
              }}
            >
              <Typography
                className="text-decoration-none"
                href="#"
                style={{
                  color: 'white',
                }}
              >
                Last paid Update
              </Typography>
            </Button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style={{ marginTop: '10em' }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalLabel"
                      style={{ color: 'red' }}
                    >
                      Are you sure you want to delete this Students
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <br />
                  <h5
                    className="modal-title"
                    id="exampleModalLabel"
                    style={{
                      marginLeft: '50px',
                    }}
                  >
                    Enter Password:
                  </h5>
                  <div
                    style={{
                      marginRight: '50px',
                      marginLeft: '50px',
                    }}
                  >
                    <input
                      className="form-control"
                      type="text"
                      name="password"
                      label="enter password for deleting"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      required
                    />
                  </div>
                  <br />
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      style={{ marginRight: '18em' }}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal1"
                      disabled={this.state.password.length !== 5}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ),
      });
    });

    const data = {
      columns: [
        {
          label: 'Student Name',
          field: 'StudentName',
          sort: 'asc',
          width: '20em',
        },
        {
          label: 'Student Number',
          field: 'StudentNumber',
          sort: 'asc',
          width: '11em',
        },
        {
          label: 'Guardian Number',
          field: 'GuardianNumber',
          sort: 'asc',
          width: '11em',
        },
        {
          label: 'Special Note',
          field: 'SpecialNote',
          sort: 'asc',
          width: '15em',
        },
        {
          label: 'email address',
          field: 'emailAddress',
          sort: 'asc',
          width: '18em',
        },
        {
          label: 'Actions',
          field: 'Actions',
          maxWidth: '10em',
        },
      ],
      rows: userAttributes,
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
          Home-Student-AllStudent
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
        <Card
          style={{ marginRight: '1rem', marginLeft: '1rem', borderRadius: 0 }}
        >
          <CardContent elevation={3}>
            <Typography variant="h5" style={{ marginBottom: '0.1em' }}>
              All Student List
            </Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0.1em',
                marginBottom: '0.1em',
                border: '1px solid #b2dfdb',
                background: '#b2dfdb',
              }}
            />
            <br />
            <MDBDataTable striped bordered data={data} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(AllStudents);
