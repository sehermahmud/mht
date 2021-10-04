import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent, InputBase, Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { CSVLink } from 'react-csv';
import ReactToPrint from 'react-to-print';
import ReactExport from 'react-export-excel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [];

// 609610125b11e4002229cd56

export class ActiveStudentprint extends Component {
  render() {
    return (
      <table
        id="dtBasicExample"
        className="table table-striped table-bordered"
        width="100%"
        style={{
          marginTop: '0.5em',
          marginBottom: '0.5em',
        }}
      >
        <thead>
          <tr>
            <th scope="col" style={{ width: '10em' }}>
              StudentName
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Student Number
            </th>
            <th scope="col" style={{ width: '20em' }}>
              Guardian Number
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Note
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Batch
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Total Payable amount/=
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
          </tr>
        </tbody>
      </table>
    );
  }
}

const Students = (props) => (
  <React.Fragment>
    {!props.student.Batch.length ? (
      <div key={props.student._id}></div>
    ) : (
      <tr key={props.student._id}>
        <td>{props.student.studentFullName}</td>
        <td>{props.student.studentPhoneNumber}</td>
        <td>{props.student.guardianPhoneNumber}</td>
        <td>{props.student.specialNote}</td>
        <td>
          {props.student.Batch09.map((thebatch) =>
            thebatch.open1 === '' ? (
              <div key={thebatch._id}></div>
            ) : (
              <div value={thebatch.open1}>{thebatch.open1}</div>
            )
          )}
        </td>
        <td>
          {props.student.Batch09.reduce(
            (totalPrice, price) =>
              totalPrice +
              parseInt(
                price.open2 === '' ? (price.open2 = 0) : price.open2,
                10
              ),
            0
          )}
        </td>
      </tr>
    )}
  </React.Fragment>
);

const Studentsheader = (props) => (
  <React.Fragment>
    {!props.student.Batch.length ? (
      <div key={props.student._id}></div>
    ) : (
      <tr>
        <th>Total: </th>
        <th></th>
        <th></th>
        <th></th>
        <th>Total:</th>
        <th>
          {props.student.Batch09.reduce(
            (totalPrice, price) =>
              totalPrice +
              parseInt(
                price.open2 === '' ? (price.open2 = 0) : price.open2,
                10
              ),
            0
          )}
        </th>
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
            student.specialNote.toLowerCase().includes(query.toLowerCase())
          );
        });

        this.setState({
          students,
          filteredData,
        });
      });

    console.log(this.state.students);
  }

  studentList() {
    return this.state.filteredData.map((currentstudents) => {
      return (
        <Students
          student={currentstudents}
          key={currentstudents._id}
          show={this.state.show}
        />
      );
    });
  }

  studentListheader() {
    return this.state.filteredData.map((currentstudents) => {
      return (
        <Studentsheader
          student={currentstudents}
          key={currentstudents._id}
          show={this.state.show}
        />
      );
    });
  }

  render() {
    const csvData = [
      {
        StudentName: '',
        StudentNumber: '',
        GuardianNumber: '',
        Note: '',
        Batch: '',
        TotalPayableamount: '',
      },
    ];

    const generatePDF = () => {
      const pdf = new jsPDF();

      pdf.autoTable({
        theme: 'plain',
        head: [
          [
            'Student Name',
            'Student Number',
            'Guardian Number',
            'Note',
            'Batch',
            'Total Payable amount/=',
          ],
        ],
        body: [
          ['', '', '', '', '', ''],
          // ...
        ],
      });
      pdf.save('dailyCollectionPaymentReporting');
    };

    const options = (
      <div style={{ margin: 0 }}>
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
          <CSVLink
            data={csvData}
            style={{ color: 'black', textDecoration: 'none' }}
          >
            CSV
          </CSVLink>
        </Button>
        <ExcelFile
          element={
            <Button
              elevation={1}
              variant="contained"
              style={{
                marginLeft: '0.3em',
                marginRight: '0.3em',
                marginTop: '0.3em',
                marginBotton: '0.3em',
                textTransform: 'none',
              }}
            >
              Excel
            </Button>
          }
        >
          <ExcelSheet data={dataSet1} name="Employees">
            <ExcelColumn label="Student Name" value="StudentName" />
            <ExcelColumn label="Student Number" value="Student Number" />
            <ExcelColumn label="Guardian Number" value="GuardianNumber" />
            <ExcelColumn label="Note" value="Note" />
            <ExcelColumn label="Batch" value="Batch" />
            <ExcelColumn
              label="Total Payable amount/="
              value="TotalPayableamount"
            />
          </ExcelSheet>
        </ExcelFile>
        <Button
          elevation={1}
          style={{
            marginLeft: '0.3em',
            marginRight: '0.3em',
            marginTop: '0.3em',
            marginBotton: '0.3em',
          }}
          variant="contained"
          onClick={generatePDF}
        >
          PDF
        </Button>
        <ReactToPrint
          trigger={() => (
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
              <Typography
                style={{ color: 'black', textDecoration: 'none' }}
                href="#"
              >
                Print
              </Typography>
            </Button>
          )}
          content={() => this.ActiveStudentprint1}
        />
      </div>
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
            {options}
            <br />
            {/* <MDBDataTable bordered striped data={data} /> */}
            <table
              ref={(el) => (this.ActiveStudentprint = el)}
              className="table table-striped table-bordered"
              width="100%"
              style={{
                marginTop: '0.5em',
                marginBottom: '0.5em',
              }}
            >
              <thead>
                {/* {this.studentListheader()} */}
                <tr>
                  <th>Total: </th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Total:</th>
                  <th>0/-</th>
                </tr>
                <tr>
                  <th scope="col" style={{ width: '10em' }}>
                    StudentName
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    Student Number
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    Guardian Number
                  </th>
                  <th scope="col" style={{ width: '10em' }}>
                    Special Note
                  </th>
                  <th scope="col" style={{ width: '12em' }}>
                    Batch
                  </th>
                  <th scope="col" style={{ width: '5em' }}>
                    Total Payable amount/=
                  </th>
                </tr>
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
