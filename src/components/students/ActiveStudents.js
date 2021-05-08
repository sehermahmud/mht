import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent, InputBase, Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';

// 609610125b11e4002229cd56

const Students = (props) => (
  <React.Fragment>
    {props.student.checked === '' ? (
      props.show === false
    ) : (
      <tr>
        <td>{props.student.studentFullName}</td>
        <td>{props.student.studentPhoneNumber}</td>
        <td>{props.student.guardianPhoneNumber}</td>
        <td>{props.student.specialNote}</td>
        <td>
          <div>{props.student.checked},</div>
          <div>{props.student.checked2}</div>
        </td>
        <td></td>
        <td>
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
              to={'/students/StudentDetails/' + props.student._id}
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
              to={'/editStudent/' + props.student._id}
            >
              Edit
            </Link>
          </Button>
        </td>
      </tr>
    )}
  </React.Fragment>
);

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
    this.showhandleChange = this.showhandleChange.bind(this);

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
      show: false,
    };
  }

  showhandleChange() {
    this.setState({
      show: this.state.show,
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

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

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

  componentDidMount(getData) {
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
  }

  studentList() {
    return this.state.filteredData.map((currentstudents) => {
      // if (
      //   this.state.filteredData.map((currentstudents) => {
      //     return (
      //       <div>
      //         {currentstudents.checked === ''} {currentstudents.checked2 === ''}
      //       </div>
      //     );
      //   })
      // ) {
      //   return <div>{currentstudents === null}</div>;
      // }

      return (
        <Students
          student={currentstudents}
          key={currentstudents._id}
          show={this.state.show}
        />
      );
    });
  }

  render() {
    // const userAttributes = [];
    // this.state.students.forEach((el) => {
    //   userAttributes.push({
    //     StudentName: el.studentFullName,
    //     StudentNumber: el.studentPhoneNumber,
    //     GuardianNumber: el.guardianPhoneNumber,
    //     SpecialNote: el.specialNote,
    //     Batch: el.checked,
    //     TotalPayableAmount: '',
    //     Actions: (
    //       <React.Fragment>
    //         <Button
    //           style={{
    //             color: 'white',
    //             background: 'linear-gradient(45deg, #311b92 30%, #673ab7 90%)',
    //             marginLeft: '0.5em',
    //             marginRight: '0.5em',
    //             marginTop: '0.3em',
    //             marginBottom: '0.3em',
    //             textTransform: 'none',
    //             fontSize: '0.9em',
    //           }}
    //         >
    //           <Link
    //             style={{
    //               color: 'white',
    //             }}
    //             className="text-decoration-none"
    //             to={'/students/StudentDetails/' + el._id}
    //           >
    //             Details
    //           </Link>
    //         </Button>
    //         <Button
    //           style={{
    //             color: 'white',
    //             marginLeft: '0.5em',
    //             marginRight: '0.5em',
    //             marginTop: '0.3em',
    //             marginBottom: '0.3em',
    //             background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
    //             textTransform: 'none',
    //             fontSize: '0.9em',
    //           }}
    //         >
    //           <Link
    //             style={{
    //               color: 'white',
    //             }}
    //             className="text-decoration-none"
    //             to={'/editStudent/' + el._id}
    //           >
    //             Edit
    //           </Link>
    //         </Button>
    //       </React.Fragment>
    //     ),
    //   });
    // });

    // const data = {
    //   columns: [
    //     {
    //       label: 'Student Name',
    //       field: 'StudentName',
    //       sort: 'asc',
    //       width: '20em',
    //     },
    //     {
    //       label: 'Student Number',
    //       field: 'StudentNumber',
    //       sort: 'asc',
    //       width: '11em',
    //     },
    //     {
    //       label: 'Guardian Number',
    //       field: 'GuardianNumber',
    //       sort: 'asc',
    //       width: '11em',
    //     },
    //     {
    //       label: 'Special Note',
    //       field: 'SpecialNote',
    //       sort: 'asc',
    //       width: '15em',
    //     },
    //     {
    //       label: 'Batch',
    //       field: 'Batch',
    //       width: '18em',
    //     },
    //     {
    //       label: 'Total Payable amount/=',
    //       field: 'TotalPayableAmount',
    //       sort: 'asc',
    //       width: '18em',
    //     },
    //     {
    //       label: 'Actions',
    //       field: 'Actions',
    //       maxWidth: '10em',
    //     },
    //   ],
    //   rows: userAttributes,
    // };
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
            <Grid
              item
              container
              direction="column"
              sm
              style={{ marginLeft: '40em', marginTop: '0.5em' }}
            >
              <Paper
                elevation={0}
                style={{
                  padding: '2px 3px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 400,
                  border: '1px solid black',
                }}
              >
                <InputBase
                  style={{
                    marginLeft: '1em',
                    flex: 1,
                  }}
                  value={this.state.query}
                  onChange={this.handleChange}
                  placeholder="Search"
                />
              </Paper>
            </Grid>
            <br />
            {/* <MDBDataTable bordered striped data={data} /> */}
            <table
              className="table table-striped table-bordered"
              width="100%"
              style={{
                marginTop: '0.5em',
                marginBottom: '0.5em',
              }}
            >
              <thead>
                <th scope="col" style={{ width: '3em' }}>
                  StudentName
                </th>
                <th scope="col" style={{ width: '5em' }}>
                  StudentNumber
                </th>
                <th scope="col" style={{ width: '5em' }}>
                  Guardian Number
                </th>
                <th scope="col" style={{ width: '10em' }}>
                  Special Note
                </th>
                <th scope="col" style={{ width: '10em' }}>
                  Batch
                </th>
                <th scope="col" style={{ width: '10em' }}>
                  Total Payable amount/=
                </th>
                <th scope="col" style={{ width: '10em' }}>
                  Action
                </th>
              </thead>
              <tbody>{this.studentList()}</tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(ActiveStudents);
