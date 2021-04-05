import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { jsPDF } from 'jspdf';
import ReactToPrint from 'react-to-print';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [];

export class ComponentToPrint extends React.Component {
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
            <th scope="col" style={{ width: '12em' }}>
              Student Name
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Student's Number
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Guardian's Number
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Email Address
            </th>
            <th scope="col" style={{ width: '8em' }}>
              School Name
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Special Note
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

export class BatchWiseStudentDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      batch: '',
      batchs: [],
    };
  }

  generatePDF = () => {
    var doc = new jsPDF('p', 'pt');

    doc.autoTable({
      theme: 'plain',
      head: [
        [
          'Student Name',
          "Student's Number",
          "Guardian's Number",
          'Email Address',
          'School Name',
          'Special Note',
        ],
      ],
      body: [[]],
    });

    doc.save('activeStudent.pdf');
  };

  componentDidMount(id) {
    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/subjects/' +
          '5f846ec167f0f40472a094ac/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({ batchs: response.data });
        console.log('batchs: ', this.state.batchs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {
      batchSubject,
      sllabys,
      grade,
      EndDate,
      Batch,
      batchSchedule,
      expectedStudents,
    } = this.state.batchs;

    const csvData = [
      {
        StudentName: '',
        StudentNumber: '',
        GuardianNumber: '',
        EmailAddress: '',
        SchoolName: '',
        SpecialNote: '',
      },
    ];

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
          Batch Details
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
          Home-Student-BatchWiseStudent {batchSubject}-{sllabys}-{grade}-
          {EndDate && EndDate.substring(2, 4)}-{Batch}
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: 0,
            marginTop: '1rem',
            border: '3px solid #00695c',
            background: '#00695c',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.5em', borderRadius: 0 }}>
          <CardContent>
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <Typography
                  variant="h5"
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                >
                  batch Name: {batchSubject}-{sllabys}-{grade}-
                  {EndDate && EndDate.substring(2, 4)}-{Batch}
                </Typography>
                <Typography
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                  variant="h5"
                >
                  Schedule: {batchSchedule}
                </Typography>
                <Typography
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                  variant="h5"
                >
                  Expected Student: {expectedStudents}
                </Typography>
              </Grid>
              <Grid item container direction="column" sm>
                <Typography
                  variant="h5"
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                >
                  Atmited Students:{' '}
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                >
                  Active Students:
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                >
                  InActive Students:
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <hr
          style={{
            marginBottom: '1em',
            marginTop: '1em',
            border: '3px solid #00897b',
            background: '#00897b',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.5em', borderRadius: 0 }}>
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: '0.8em' }}>
              Active Student List
            </Typography>
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
                  <ExcelColumn label="Student name" value="name" />
                  <ExcelColumn label="Student's Number" value="StudentNumber" />
                  <ExcelColumn
                    label="Guardian's Number"
                    value="GuardianNumber"
                  />
                  <ExcelColumn label="EmailAddress" value="EmailAddress" />
                  <ExcelColumn label="SchoolName" value="SchoolName" />
                  <ExcelColumn label="SpecialNote" value="SpecialNote" />
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
                onClick={this.generatePDF}
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
                content={() => this.componentRef}
              />
            </div>
            <br />
            <ComponentToPrint ref={(el) => (this.componentRef = el)} />
          </CardContent>
        </Card>
        <hr
          style={{
            marginBottom: '1em',
            marginTop: '1em',
            border: '3px solid #00897b',
            background: '#00897b',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.5em', borderRadius: 0 }}>
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: '0.8em' }}>
              InActive Students List
            </Typography>
            <br />
            <table
              id="dtBasicExample"
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col" style={{ width: '12em' }}>
                    Student Name
                  </th>
                  <th scope="col" style={{ width: '5em' }}>
                    Student's Number
                  </th>
                  <th scope="col" style={{ width: '5em' }}>
                    Guardian's Number
                  </th>
                  <th scope="col" style={{ width: '10em' }}>
                    Email Address
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    School Name
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    Special Note
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
          </CardContent>
        </Card>
      </div>
    );
  }
}
