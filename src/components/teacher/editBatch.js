import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class EditBatchTeacher extends Component {
  constructor(props) {
    super(props);

    this.onChangeBatch = this.onChangeBatch.bind(this);
    this.onChangeBatchPrice = this.onChangeBatchPrice.bind(this);
    this.onChangeSllabys = this.onChangeSllabys.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeBatchSchedule = this.onChangeBatchSchedule.bind(this);
    this.onChangeExpectedStudents = this.onChangeExpectedStudents.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Batch: '',
      batchPrice: 0,
      sllabys: '',
      grade: '',
      batchSubject: '',
      batchSchedule: '',
      expectedStudents: '',
      StartDate: new Date(),
      EndDate: new Date(),
      allsllabys: [],
      grades: [],
      subjects: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://mht-backend-1.herokuapp.com/teachersBatch/' +
          this.props.match.params.id +
          '/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          Batch: response.data.Batch,
          batchPrice: response.data.batchPrice,
          sllabys: response.data.sllabys,
          grade: response.data.grade,
          batchSubject: response.data.batchSubject,
          batchSchedule: response.data.batchSchedule,
          expectedStudents: response.data.expectedStudents,
          StartDate: new Date(response.data.StartDate),
          EndDate: new Date(response.data.EndDate),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('https://mht-backend-1.herokuapp.com/grades/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            grades: response.data.map((grading) => grading.grade),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('https://mht-backend-1.herokuapp.com/subjects/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            subjects: response.data.map((subject) => subject.subject),
          });
        }
      });

    axios
      .get('https://mht-backend-1.herokuapp.com/sllabys/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            allsllabys: response.data.map((sllabys) => sllabys.sllabys),
          });
        }
      });
  }

  onChangeBatch(e) {
    this.setState({ Batch: e.target.value });
  }

  onChangeBatchPrice(e) {
    this.setState({ batchPrice: e.target.value });
  }

  onChangeSllabys(e) {
    this.setState({ sllabys: e.target.value });
  }

  onChangeSubject(e) {
    this.setState({ batchSubject: e.target.value });
  }

  onChangeGrade(e) {
    this.setState({ grade: e.target.value });
  }

  onChangeBatchSchedule(e) {
    this.setState({ batchSchedule: e.target.value });
  }

  onChangeExpectedStudents(e) {
    this.setState({ expectedStudents: e.target.value });
  }

  onChangeStartDate(date) {
    this.setState({ StartDate: date });
  }

  onChangeEndDate(date) {
    this.setState({ EndDate: date });
  }

  onSubmit(e) {
    e.preventDefault();

    const teacher = {
      Batch: this.state.Batch,
      batchPrice: this.state.batchPrice,
      sllabys: this.state.sllabys.substring(0, 3),
      batchSubject: this.state.batchSubject.substring(0, 3),
      grade: this.state.grade,
      batchSchedule: this.state.batchSchedule,
      expectedStudents: this.state.expectedStudents,
      StartDate: this.state.StartDate,
      EndDate: this.state.EndDate,
    };

    console.log(teacher);

    axios
      .post(
        'https://mht-backend-1.herokuapp.com/teachersBatch/update/' +
          this.props.match.params.id,
        teacher
      )
      .then((res) => console.log(res.data));

    axios
      .post(
        'https://mht-backend-1.herokuapp.com/batchs/update/' +
          this.props.match.params.id,
        teacher
      )
      .then((res) => console.log(res.data));

    window.location = '/teacher';
  }

  render() {
    return (
      <div style={{ marginTop: '3em' }}>
        <Card
          style={{
            marginRight: '1em',
            marginLeft: '1em',
            display: 'flex',
            flexWrap: 'wrap',
          }}
          elevation={1}
        >
          <CardContent>
            <from>
              <Typography
                variant="h5"
                style={{
                  margin: '2px',
                }}
              >
                Edit Batch
              </Typography>
              <hr
                style={{
                  border: '1px solid #00796b',
                  background: '#00796b',
                  marginTop: '0em',
                }}
              />
              <br />
              <div className="form-row">
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Batch No.</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Batch"
                    value={this.state.Batch}
                    onChange={this.onChangeBatch}
                  />
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    value={this.state.batchPrice}
                    onChange={this.onChangeBatchPrice}
                  />
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Education Board</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.sllabys}
                    onChange={this.onChangeSllabys}
                  >
                    {this.state.allsllabys.map(function (sllabys) {
                      return (
                        <option key={sllabys} value={sllabys}>
                          {sllabys}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Grade</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.grade}
                    onChange={this.onChangeGrade}
                  >
                    {this.state.grades.map(function (grading) {
                      return (
                        <option key={grading} value={grading}>
                          {grading}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Subject</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.batchSubject}
                    onChange={this.onChangeSubject}
                  >
                    {this.state.subjects.map(function (subject) {
                      return (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Schedule</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Schedule"
                    value={this.state.batchSchedule}
                    onChange={this.onChangeBatchSchedule}
                  />
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Expected Students</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Expected Students"
                    value={this.state.expectedStudents}
                    onChange={this.onChangeExpectedStudents}
                  />
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      margin="normal"
                      format="dd/MM/yyyy"
                      label="Start Date"
                      value={this.state.StartDate}
                      onChange={this.onChangeStartDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      margin="normal"
                      format="dd/MM/yyyy"
                      label="End Date"
                      value={this.state.EndDate}
                      onChange={this.onChangeEndDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <Link to="/teacher">
                  <Button
                    className="btn"
                    style={{
                      color: '#2196f3',
                      border: '1px solid #2196f3',
                      marginTop: '5em',
                      marginLeft: '1em',
                    }}
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  className="btn btn-danger"
                  style={{
                    background: '#00e676',
                    color: 'white',
                    marginTop: '5em',
                    marginLeft: '62em',
                  }}
                  onClick={this.onSubmit}
                >
                  Update
                </Button>
              </div>
            </from>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(EditBatchTeacher);
