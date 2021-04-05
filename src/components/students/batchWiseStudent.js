import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

export class BatchWiseStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onShow = this.onShow.bind(this);

    this.state = {
      subject: '',
      subjects: [],
      selectedBatch: [],
      Teachers: [],
    };
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  componentDidMount(id) {
    axios
      .get('https://mht-backend-edu.herokuapp.com/subjects/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            subjects: response.data.map((subject) => subject.subject),
          });
        }

        console.log(this.state.subjects);
      });

    console.log(this.state.selectedBatch);
  }

  onShow(e) {
    e.preventDefault();

    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/subjects/' +
          '5f846ec167f0f40472a094ac' +
          '/batch'
      )
      .then((response) => {
        this.setState({
          selectedBatch: response.data.batchUnderSubject,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('https://mht-backend-edu.herokuapp.com/teachers/')
      .then((response) => {
        this.setState({ Teachers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('info:', this.state.Teachers);
  }

  render() {
    const userAttributesTeacher = [];
    this.state.Teachers.forEach((el) => {
      userAttributesTeacher.push({
        Teacher: el.teacherName,
      });
    });

    console.log(userAttributesTeacher);

    const userAttributes = [];
    if (this.state.subjects[2] !== true) {
      this.state.selectedBatch.forEach((el) => {
        userAttributes.push({
          BatchName:
            el.batchSubject +
            '-' +
            el.sllabys +
            '-' +
            el.grade +
            '-' +
            el.EndDate.substring(2, 4) +
            '-' +
            el.Batch,
          Schedule: el.batchSchedule,
          Teacher: userAttributesTeacher[0].Teacher,
          ExpectedStudents: el.expectedStudents,
          Actions: (
            <Link
              to={'/students/batchDetails/' + el._id}
              style={{ textDecoration: 'none' }}
            >
              <Button
                style={{
                  color: 'white',
                  background: '#673ab7',
                  textTransform: 'none',
                }}
              >
                Details
              </Button>{' '}
            </Link>
          ),
        });
      });
    } else {
      this.state.selectedBatch.forEach((el) => {
        userAttributes.push({
          Schedule: el.batchSchedule,
        });
      });
    }

    console.log(this.state.subjects[2]);

    const data = {
      columns: [
        {
          label: 'Batch Name',
          field: 'BatchName',
          sort: 'asc',
          width: '13em',
        },
        {
          label: 'Schedule',
          field: 'Schedule',
          sort: 'asc',
          width: '13em',
        },
        {
          label: 'Teacher',
          field: 'Teacher',
          sort: 'asc',
          width: '10em',
        },
        {
          label: 'Expected Students',
          field: 'ExpectedStudents',
          sort: 'asc',
          width: '5em',
        },
        {
          label: 'Atmited Students',
          field: 'AtmitedStudents',
          sort: 'asc',
          width: '4em',
        },
        {
          label: 'Active Students',
          field: 'ActiveStudents',
          sort: 'asc',
          width: '4em',
        },
        {
          label: 'Actions',
          field: 'Actions',
          width: '6em',
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
          Home-Student-BatchWiseStudent-subject-Batches
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: 0,
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            width: '100%',
          }}
        />
        <Card
          elevation={3}
          style={{
            margin: '0.5em',
            borderRadius: 0,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              Choose a Subject to Show Batches
            </Typography>
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <div
                  style={{
                    marginBottom: '1em',
                    marginTop: '1em',
                    marginRight: '5em',
                  }}
                >
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.subject}
                    onChange={this.onChangeSubject}
                  >
                    <option>Choose...</option>
                    {this.state.subjects.map(function (subject) {
                      return (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      );
                    })}
                    {/* <option></option> */}
                  </select>
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <Button
                  // onClick={this.onShow}
                  style={{
                    background: '#4caf50',
                    color: 'white',
                    marginBottom: '1em',
                    marginTop: '1em',
                    marginLeft: '5em',
                  }}
                >
                  Show
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card
          elevation={3}
          style={{
            margin: '0.5em',
            borderRadius: 0,
          }}
        >
          <CardContent style={{ marginBottom: '0.5em' }}>
            <MDBDataTable striped bordered data={data} />
          </CardContent>
        </Card>
      </div>
    );
  }
}
