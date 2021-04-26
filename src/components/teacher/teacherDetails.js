import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const TeacherBatchlist = (props) => (
  <tr>
    <td>{props.TeacherBatchActions.batchSchedule}</td>
    <td>
      {props.TeacherBatchActions.batchSubject}-
      {props.TeacherBatchActions.sllabys}-{props.TeacherBatchActions.grade}-
      {props.TeacherBatchActions.EndDate &&
        props.TeacherBatchActions.EndDate.substring(2, 4)}
      -{props.TeacherBatchActions.Batch}
    </td>
    <td>{props.TeacherBatchActions.batchPrice}</td>
    <td>{props.TeacherBatchActions.expectedStudents}</td>
    <td>AS</td>
    <td>
      {props.TeacherBatchActions.StartDate &&
        props.TeacherBatchActions.StartDate.substring(0, 10)}
    </td>
    <td>
      {props.TeacherBatchActions.StartDate &&
        props.TeacherBatchActions.EndDate.substring(0, 10)}
    </td>
    <td>
      <Button
        style={{
          color: 'white',
          background: '#66bb6a',
          marginLeft: '1em',
          marginRight: '1em',
          marginTop: '0.5em',
          marginBottom: '0.5em',
        }}
      >
        <Link
          style={{
            color: 'white',
          }}
          className="text-decoration-none"
          to={'/editTeacherBatch/' + props.TeacherBatchActions._id}
        >
          edit
        </Link>
      </Button>
      <Button
        style={{
          color: 'white',
          background: '#ef5350',
          marginLeft: '1em',
          marginRight: '1em',
          marginTop: '0.5em',
          marginBottom: '0.5em',
        }}
      >
        <Typography
          className="text-decoration-none"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{
            color: 'white',
          }}
        >
          delete{' '}
        </Typography>
      </Button>
    </td>

    <div
      className="modal fade"
      id="confrimModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Click again to delete
            </h5>
          </div>
          <div className="modal-footer">
            <Button
              data-dismiss="modal"
              color="primary"
              style={{ margin: '0.5em' }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              style={{ margin: '0.5em', background: 'red' }}
              onClick={() => {
                props.deleteTeacher(props.TeacherBatchActions._id);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  </tr>
);

const TeacherBatchDelete = (props) => (
  // props.deleteTeacher(props.TeacherBatchActionsDelete._id)
  <Button onClick={props.deleteTeacher(props.TeacherBatchActionsDelete._id)}>
    Delete
  </Button>
);

class TeacherDetails extends Component {
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
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeErrors = this.onChangeErrors.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTeacher = this.deleteTeacher.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      checked: false,
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
      teachers: [],
      Batchsteacher: [],
      password: '',
      errors: {},
    };
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  onChangeErrors(e) {
    this.setState({
      errors: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeBatch(e) {
    this.setState({
      Batch: e.target.value,
    });
  }

  onChangeBatchPrice(e) {
    this.setState({
      batchPrice: e.target.value,
    });
  }

  onChangeSllabys(e) {
    this.setState({
      sllabys: e.target.value,
    });
  }

  onChangeGrade(e) {
    this.setState({
      grade: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      batchSubject: e.target.value,
    });
  }

  onChangeBatchSchedule(e) {
    this.setState({
      batchSchedule: e.target.value,
    });
  }

  onChangeExpectedStudents(e) {
    this.setState({
      expectedStudents: e.target.value,
    });
  }

  onChangeStartDate(date) {
    this.setState({
      StartDate: date,
    });
  }

  onChangeEndDate(date) {
    this.setState({
      EndDate: date,
    });
  }

  componentDidMount(id) {
    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/teachers/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({ teachers: response.data });
        console.log('teacher: ', this.state.teachers);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/teachersBatch/' +
          this.props.match.params.id +
          '/allTeacherBatch'
      )
      .then((response) => {
        this.setState({
          Batchsteacher: response.data.teacher.teacherBatch,
        });
        console.log('teacherBatch: ', this.state);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('https://mht-backend-edu.herokuapp.com/grades/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            grades: response.data.map((grading) => grading.grade),
            grade: response.data[0].grade,
          });
        }
      });

    axios
      .get('https://mht-backend-edu.herokuapp.com/subjects/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            subjects: response.data.map((subject) => subject.subject),
            subject: response.data[0].subject,
          });
        }
      });

    axios
      .get('https://mht-backend-edu.herokuapp.com/sllabys/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            allsllabys: response.data.map((sllabys) => sllabys.sllabys),
            sllabys: response.data[0].sllabys,
          });
        }
      });
  }

  onSubmit(e, teacherId, id) {
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
        `https://mht-backend-edu.herokuapp.com/teachersBatch/` +
          this.props.match.params.id +
          `/` +
          `5f846ec167f0f40472a094ac` +
          `/addBatch`,
        teacher
      )
      .then((res) => console.log(res.data));

    window.location.reload(true);
  }

  deleteTeacher(id) {
    axios
      .delete('https://mht-backend-edu.herokuapp.com/teachersBatch/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      Batchsteacher: this.state.Batchsteacher.filter((el) => el._id !== id),
    });

    window.location.reload(true);
  }

  teacherBatchActions() {
    return this.state.Batchsteacher.map((currentTeacherBatchActions) => {
      return (
        <TeacherBatchlist
          TeacherBatchActions={currentTeacherBatchActions}
          deleteTeacher={this.deleteTeacher}
          key={currentTeacherBatchActions._id}
        />
      );
    });
  }

  teacherBatchActionsDelete() {
    return this.state.Batchsteacher.map((currentTeacherBatchActionsDelete) => {
      return (
        <TeacherBatchDelete
          TeacherBatchActionsDelete={currentTeacherBatchActionsDelete}
          deleteTeacher={this.deleteTeacher}
          key={currentTeacherBatchActionsDelete._id}
        />
      );
    });
  }

  render() {
    const {
      teacherName,
      email,
      contactNumber,
      subject,
      percentage,
      teacherPhoto,
      teacherNID,
      teacherLastCertificatePhoto,
    } = this.state.teachers;

    return (
      <Grid style={{ marginTop: '3em' }}>
        <Typography variant="h5" style={{ marginLeft: '1em', color: 'white' }}>
          Teacher, {teacherName}'s Information
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '0.1em',
            border: '3px solid #00796b',
            background: '#00796b',
          }}
        />
        <Card
          elevation={1}
          style={{
            background: '#fff0f5',
            marginRight: '1em',
            marginLeft: '1em',
            borderRadius: 0,
            borderRight: '3px solid #009688',
            borderLeft: '3px solid #009688',
          }}
        >
          <CardContent>
            <form>
              <div className="row">
                <div
                  style={{
                    width: '10em',
                    height: '10em',
                    marginTop: '1rem',
                    marginLeft: '11em',
                    marginBottom: '1em',
                  }}
                >
                  <Typography
                    style={{
                      textAlign: 'center',
                      fontSize: '1em',
                    }}
                  >
                    Teacher's Photo
                  </Typography>
                  <img
                    src={teacherPhoto}
                    alt="Teacher"
                    style={{
                      width: '10em',
                      height: '10em',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    width: '10em',
                    height: '10em',
                    marginTop: '1rem',
                    marginLeft: '11em',
                    marginBottom: '1em',
                  }}
                >
                  <Typography
                    style={{
                      textAlign: 'center',
                      fontSize: '1em',
                    }}
                  >
                    Teacher's NID Photo
                  </Typography>
                  <img
                    src={teacherNID}
                    alt="Teacher's NID"
                    style={{
                      width: '10em',
                      height: '10em',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    width: '10em',
                    height: '10em',
                    marginTop: '1rem',
                    marginLeft: '11em',
                    marginBottom: '1em',
                  }}
                >
                  <Typography
                    style={{
                      textAlign: 'center',
                      fontSize: '1em',
                    }}
                  >
                    Teacher's Last Certificate
                  </Typography>
                  <img
                    src={teacherLastCertificatePhoto}
                    alt="Teacher's Last Certificate"
                    style={{
                      width: '10em',
                      height: '10em',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card
          elevation={1}
          style={{
            background: '#fff0f5',
            marginRight: '1em',
            marginLeft: '1em',
            borderRadius: 0,
            borderRight: '3px solid #26a69a',
            borderLeft: '3px solid #26a69a',
          }}
        >
          <CardContent>
            <form>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Teacher Name</label>
                <div className="col-sm-8">
                  <Typography className="form-control-plaintext">
                    {teacherName}
                  </Typography>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email</label>
                <div className="col-sm-8">
                  <Typography className="form-control-plaintext">
                    {email}
                  </Typography>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  Teacher Contact Number
                </label>
                <div className="col-sm-8">
                  <Typography className="form-control-plaintext">
                    {contactNumber}
                  </Typography>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  Teaching Subject
                </label>
                <div className="col-sm-8">
                  <Typography className="form-control-plaintext">
                    {subject}
                  </Typography>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  Teacher Percentage
                </label>
                <div className="col-sm-8">
                  <Typography className="form-control-plaintext">
                    {percentage}
                  </Typography>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <hr
          style={{
            border: '3px solid #4db6ac',
            marginTop: '1rem',
            marginBottom: '1em',
            background: '#4db6ac',
          }}
        />
        <Card
          style={{
            background: '#fef2ff',
            display: 'flex',
            flexWrap: 'wrap',
            marginRight: '1em',
            marginLeft: '1em',
            borderRadius: 0,
            borderRight: '3px solid #26a69a',
            borderLeft: '3px solid #26a69a',
          }}
          elevation={1}
        >
          <CardContent>
            <from>
              <Typography variant="h5" style={{ margin: '2px' }}>
                Create New Batch
              </Typography>
              <br />
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
                    {this.state.grades.map(function (grade) {
                      return (
                        <option key={grade} value={grade}>
                          {grade}
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
                <Button
                  variant="contained"
                  style={{
                    background: '#1de9b6',
                    marginTop: '2em',
                    marginLeft: '0.5em',
                    margin: '2px',
                  }}
                  onClick={this.onSubmit}
                >
                  Submit
                </Button>
              </div>
            </from>
          </CardContent>
        </Card>
        <hr
          style={{
            border: '3px solid #80cbc4',
            marginTop: '1rem',
            marginBottom: '1em',
            background: '#80cbc4',
          }}
        />
        <Card
          style={{ marginRight: '1rem', marginLeft: '1rem', borderRadius: 0 }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6" style={{}}>
              All Batches under {teacherName}
            </Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '1em',
                border: '1px solid #b2dfdb',
                background: '#b2dfdb',
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
                  <th scope="col" style={{ width: '20em' }}>
                    Schedule
                  </th>
                  <th scope="col" style={{ width: '18em' }}>
                    Batch Name
                  </th>
                  <th scope="col" style={{ width: '10em' }}>
                    Price TK/=
                  </th>
                  <th scope="col" style={{ width: '7em' }}>
                    Expected Students
                  </th>
                  <th scope="col" style={{ width: '7em' }}>
                    Active Students
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    Start Date
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    End Date
                  </th>
                  <th scope="col" style={{ width: '19em' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{this.teacherBatchActions()}</tbody>
            </table>
          </CardContent>
        </Card>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Are you sure you want to delete the the Batch? After that you
                  can not get it back!
                </h5>
              </div>
              <div className="modal-footer">
                <Button
                  data-dismiss="modal"
                  color="primary"
                  style={{ margin: '0.5em' }}
                >
                  Cancel
                </Button>
                <Button
                  autoFocus
                  style={{ margin: '0.5em', background: 'red' }}
                  // onClick={() => {
                  //   props.deleteTeacher(props.TeacherBatchActions._id);
                  // }}
                  data-toggle="modal"
                  data-target="#passwordModal"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="passwordModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Enter the Password for deleting
                </h5>
              </div>
              <div>
                <label>Password</label>
                <input
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  placeholder="password"
                />
              </div>
              <div className="modal-header">{/* <Modalform /> */}</div>
              <div className="modal-footer">
                <Button
                  data-dismiss="modal"
                  color="primary"
                  style={{ margin: '0.5em' }}
                >
                  Cancel
                </Button>
                <Button
                  autoFocus
                  style={{ margin: '0.5em', background: 'red' }}
                  onClick={(id) => {
                    if (this.state.password !== 'seher') {
                      console.log('Invalid password');
                      // return <Error />;
                    } else {
                      console.log('delete');
                    }
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}

export default withRouter(TeacherDetails);
