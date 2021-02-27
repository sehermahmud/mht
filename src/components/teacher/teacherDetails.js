import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { Button, Grid } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DashboardIcon from '@material-ui/icons/';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
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
      .get('http://localhost:4000/teachers/' + this.props.match.params.id)
      .then((response) => {
        this.setState({ teachers: response.data });
        console.log('teacher: ', this.state.teachers);
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios
    //   .get(
    //     'http://localhost:4000/teachersBatch/' +
    //       this.props.match.params.id +
    //       '/allTeacherBatch'
    //   )
    //   .then((response) => {
    //     this.setState({
    //       Batchsteacher: response.data.teacher.teacherBatch,
    //     });
    //     console.log('teacherBatch: ', this.state);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios
      .get(
        'http://localhost:4000/teachersBatch/' +
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

    axios.get('http://localhost:4000/grades/').then((response) => {
      if (response.data.length > 0) {
        this.setState({
          grades: response.data.map((grading) => grading.grade),
          grade: response.data[0].grade,
        });
      }
    });

    axios.get('http://localhost:4000/subjects/').then((response) => {
      if (response.data.length > 0) {
        this.setState({
          subjects: response.data.map((subject) => subject.subject),
          subject: response.data[0].subject,
        });
      }
    });

    axios.get('http://localhost:4000/sllabys/').then((response) => {
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
        `http://localhost:4000/teachersBatch/` +
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
      .delete('http://localhost:4000/teachersBatch/' + id)
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

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'linear-gradient(45deg, #1565c0 30%, #ffffff 50%, #6a1b9a 90%)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: 'linear-gradient(45deg, #1565c0 30%, #ffffff 50%, #6a1b9a 90%)',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: '#00bfa5',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: '#00bfa5',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: '#00bfa5',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    fontFamily: 'Handlee',
    textTransform: 'none',
    fontSize: '1.2em',
    fontWeight: 600,
    background: '#651fff',
    color: 'white',
    borderRadius: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  hover: {
    '&:hover': {
      background: 'none',
    },
  },
  Summary: {
    padding: 0,
  },
  icon: {
    marginRight: '2.2em',
  },
  TeacherIcon: {
    marginRight: '20px',
  },
  ReportingIcon: {
    marginRight: '1px',
  },
  UserIcon: {
    marginRight: '3px',
  },
  studentPaymentIcon: {
    marginleft: '10px',
  },
  paymentsSummary: {
    color: '#7c4dff',
  },
  fontStyle: {
    '&:hover': {
      textDecoration: 'none',
    },
    color: 'white',
    margin: 0,
    padding: 0,
    marginLeft: '1em',
  },
  ChevronLeftIcon: {
    marginRight: '28px',
  },
  MHT: {
    fontSize: '2.5em',
    fontFamily: 'Merienda One',
    marginRight: '1.5em',
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ color: '#004d40' }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            className={classes.MHT}
            style={{ color: 'black' }}
          >
            MHT
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ background: 'red' }}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
          // paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <div className={classes.MHTfont}>
            <Typography className={classes.MHT}>MHT</Typography>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <MenuIcon style={{ color: 'white', marginRight: '0.5em' }} />
            ) : (
              <MenuIcon style={{ color: 'white', marginRight: '0.5em' }} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon style={{ marginLeft: '0.7em' }} />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  className={classes.fontStyle}
                  style={{
                    textDecoration: 'none',
                    hover: {
                      '&:hover': {
                        background: 'none',
                        textDecoration: 'none',
                        color: 'white',
                      },
                    },
                  }}
                >
                  Dashboard
                </Typography>
              </ListItemText>
            </ListItem>
          </Link>
          <ListItem button>
            <Accordion
              elevation={0}
              className={classes.hover}
              style={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <Typography style={{ color: 'white' }}>Students</Typography>
                <ListItemIcon>
                  <ChevronLeftIcon style={{ marginLeft: '3.8em' }} />
                </ListItemIcon>
              </AccordionSummary>
              <Link to="/students/addStudents">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      All Students
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/students/activeStudents">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Active Students
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/students/batchwise">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Batch wise Student
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/students/allStudents">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Add New Student
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Accordion elevation={0} style={{ background: '#00bfa5' }}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <Typography style={{ color: 'white' }}>
                    Payment Section
                  </Typography>
                  <ListItemIcon>
                    <ChevronLeftIcon style={{ marginLeft: '1.3em' }} />
                  </ListItemIcon>
                </AccordionSummary>
                <Link to="/students/payments/batchPayment">
                  <ListItem button>
                    <ListItemIcon>
                      <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography style={{ color: 'white' }}>
                        Batch payments
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link to="/students/payments/otherPayment">
                  <ListItem button>
                    <ListItemIcon>
                      <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography style={{ color: 'white' }}>
                        other payments
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </Link>
              </Accordion>
            </Accordion>
          </ListItem>
          <ListItem button>
            <Accordion
              elevation={0}
              className={classes.hover}
              style={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <Typography style={{ color: 'white' }}>Teacher</Typography>
                <ListItemIcon>
                  <ChevronLeftIcon style={{ marginLeft: '4.1em' }} />
                </ListItemIcon>
              </AccordionSummary>
              <Link to="/teacher">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Add Teacher
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/teachers/teacherPayment">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Teacher payment
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            </Accordion>
          </ListItem>
          <ListItem button>
            <Accordion
              elevation={0}
              className={classes.hover}
              style={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <Typography style={{ color: 'white' }}>Reporting</Typography>
                <ListItemIcon>
                  <ChevronLeftIcon style={{ marginLeft: '3.5em' }} />
                </ListItemIcon>
              </AccordionSummary>
              <Link to="">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Reporting Dashboard
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/reporting/dailyPayment">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Daily payment
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/reporting/otherPayment">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Other payment
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            </Accordion>
          </ListItem>
          <ListItem button>
            <Accordion
              elevation={0}
              className={classes.hover}
              style={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <Typography style={{ color: 'white' }}>Settings</Typography>
                <ListItemIcon>
                  <ChevronLeftIcon style={{ marginLeft: '4em' }} />
                </ListItemIcon>
              </AccordionSummary>
              <ListItem button>
                <Accordion
                  elevation={0}
                  className={classes.hover}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ListItemIcon>
                      <FileCopyIcon />
                    </ListItemIcon>
                    <Typography style={{ color: 'white' }}>User</Typography>
                    <ListItemIcon>
                      <ChevronLeftIcon style={{ marginLeft: '5.1em' }} />
                    </ListItemIcon>
                  </AccordionSummary>
                  <Link to="/user/allUser">
                    <ListItem button>
                      <ListItemIcon>
                        <RadioButtonUncheckedIcon
                          style={{ marginLeft: '0.7em' }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography style={{ color: 'white' }}>
                          All User
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Link to="/user/addUser">
                    <ListItem button>
                      <ListItemIcon>
                        <RadioButtonUncheckedIcon
                          style={{ marginLeft: '0.7em' }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography style={{ color: 'white' }}>
                          Add User
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Link to="/user/editUser">
                    <ListItem button>
                      <ListItemIcon>
                        <RadioButtonUncheckedIcon
                          style={{ marginLeft: '0.7em' }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography style={{ color: 'white' }}>
                          Edit User
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </Link>
                </Accordion>
              </ListItem>
              <Link to="/sllabys">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.fontStyle}>
                      Sllabys
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/school">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.fontStyle}>
                      School
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/subject">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.fontStyle}>
                      Subjects
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/grade">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.fontStyle}>Grade</Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            </Accordion>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <TeacherDetails {...props} />
      </main>
    </div>
  );
}
