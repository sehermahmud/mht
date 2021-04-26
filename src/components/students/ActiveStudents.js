import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent } from '@material-ui/core';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

export class ActiveStudents extends Component {
  constructor(props) {
    super(props);

    // this.handleChange15 = this.handleChange15.bind(this);
    this.onChangeStudentFullName = this.onChangeStudentFullName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFatherName = this.onChangeFatherName.bind(this);
    this.onChangeMotherName = this.onChangeMotherName.bind(this);
    this.onChangeStudentPhoneNumber = this.onChangeStudentPhoneNumber.bind(
      this
    );
    this.onChangeGuardianPhoneNumber = this.onChangeGuardianPhoneNumber.bind(
      this
    );
    this.onChangeSpecialNote = this.onChangeSpecialNote.bind(this);
    this.onChangeStudentPhoto = this.onChangeStudentPhoto.bind(this);
    this.onChangeStudentSchool = this.onChangeStudentSchool.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeSllabys = this.onChangeSllabys.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);

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
    };
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
          student.specialNote.toLowerCase().includes(query.toLowerCase())
        );
      });

      return {
        query,
        filteredData,
      };
    });
  };

  // && student.specialNote

  getData = () => {
    fetch('https://mht-backend-edu.herokuapp.com/students/')
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
            student.specialNote.toLowerCase().includes(query.toLowerCase())
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
      .get('https://mht-backend-edu.herokuapp.com/students/')
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(this.state);
  }

  render() {
    const userAttributes = [];
    this.state.students.forEach((el) => {
      userAttributes.push({
        StudentName: el.studentFullName,
        StudentNumber: el.studentPhoneNumber,
        GuardianNumber: el.guardianPhoneNumber,
        SpecialNote: el.specialNote,
        Batch: el.checked,
        TotalPayableAmount: '',
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
          label: 'Batch',
          field: 'Batch',
          width: '18em',
        },
        {
          label: 'Total Payable amount/=',
          field: 'TotalPayableAmount',
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
          Home-Student-ActiveStudent
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
              Active Student List
            </Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '0.5em',
                border: '1px solid #b2dfdb',
                background: '#b2dfdb',
              }}
            />
            <br />
            <MDBDataTable bordered striped data={data} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(ActiveStudents);
