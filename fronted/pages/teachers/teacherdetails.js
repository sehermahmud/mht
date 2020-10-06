import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles, TextField, useTheme } from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  imgHolder: {
    width: '16em',
    height: '16em',
    marginTop: '1rem',
    marginLeft: '11em',
    marginBottom: '1em',
    [theme.breakpoints.down('md')]: {
      width: '14em',
      height: '14em',
      marginLeft: '8em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '12em',
      height: '12em',
      marginLeft: '4.5em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '14em',
      height: '14em',
      marginLeft: '5.5em',
    },
  },
  img: {
    width: '16em',
    height: '16em',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
      width: '14em',
      height: '14em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '12em',
      height: '12em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '14em',
      height: '14em',
    },
  },
  hr: {
    marginBottom: '1em',
    border: '3px solid #7c4dff',
    marginTop: '1rem',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
}));

export default function teacherdetails() {
  const classes = useStyle();
  const theme = useTheme();
  const [teacherBatch, setTeacherBatch] = React.useState('');
  const [teacherPrice, setTeacherPrice] = React.useState('');
  const [teacherEducationboard, setTeacherEducationboard] = React.useState('');
  const [teacherGrade, setTeacherGrade] = React.useState('');
  const [teachingSubject, setTeachingSubject] = React.useState('');
  const [teacherSchedule, setTeacherSchedule] = React.useState('');
  const [teacherExpectedStudents, setTeacherExpectedStudents] = React.useState(
    ''
  );
  const [teacherStartDate, setTeacherStartDate] = React.useState(new Date());
  const [teacherEndDate, setTeacherEndDate] = React.useState(new Date());
  const [teacherdetails, setTeacherdetails] = React.useState([]);
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const handleStartDateChange = (date) => {
    setTeacherStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setTeacherEndDate(date);
  };

  function createData(
    teacherSchedule,
    teacherBatch,
    teachingSubject,
    teacherEducationboard,
    teacherGrade,
    teacherPrice,
    teacherExpectedStudents,
    teacherStartDate,
    teacherEndDate
  ) {
    return {
      teacherSchedule,
      teacherBatch,
      teachingSubject,
      teacherEducationboard,
      teacherGrade,
      teacherPrice,
      teacherExpectedStudents,
      teacherStartDate,
      teacherEndDate,
    };
  }

  const handleAddRow = (e) => {
    e.preventDefault();

    setTeacherdetails([
      ...teacherdetails,
      createData(
        teacherSchedule,
        teacherBatch,
        teachingSubject,
        teacherEducationboard,
        teacherGrade,
        teacherPrice,
        teacherExpectedStudents,
        format(teacherStartDate, 'MM/dd/yyyy'),
        format(teacherEndDate, 'MM/dd/yyyy')
      ),
    ]);
  };

  const EndDate = () => {
    return teacherdetails.map((item, index) => (
      <td>
        {item.teachingSubject +
          '-' +
          item.teacherEducationboard +
          '-' +
          item.teacherGrade +
          '-' +
          item.teacherEndDate}
      </td>
    ));
  };

  const strDate = teacherEndDate; // By default Date empty constructor give you Date.now
  const shortYear = strDate.getFullYear();
  // Add this line
  const twoDigitYear = shortYear.toString().substr(-2);

  return (
    <Grid style={{ marginTop: '6em' }}>
      <Typography variant="h4">Teacher Information</Typography>
      <hr
        style={{ marginTop: 0, marginBottom: '1em', background: '#2196f3' }}
      />
      <Card elevation={1}>
        <CardContent>
          <form>
            <div className="row">
              <div className={classes.imgHolder}>
                <Typography
                  style={{
                    textAlign: 'center',
                    fontSize: matchesSM ? '1em' : '1.2em',
                  }}
                >
                  Teacher's Photo
                </Typography>
                <img
                  src="../../founderSeher1.jpg"
                  alt="Teacher's Photo"
                  className={classes.img}
                />
              </div>
              <div className={classes.imgHolder}>
                <Typography
                  style={{
                    textAlign: 'center',
                    fontSize: matchesSM ? '1em' : '1.2em',
                  }}
                >
                  Teacher's NID Photo
                </Typography>
                <img
                  src="../../seher.png"
                  alt="Teacher's NID Photo"
                  className={classes.img}
                />
              </div>
              <div className={classes.imgHolder}>
                <Typography
                  style={{
                    textAlign: 'center',
                    fontSize: matchesSM ? '1em' : '1.2em',
                  }}
                >
                  Teacher's Last Certificate
                </Typography>
                <img
                  src="../../seherLogo.png"
                  alt="Teacher's Last Certificate"
                  className={classes.img}
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card elevation={1}>
        <CardContent>
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Teacher Name</label>
              <div className="col-sm-8">
                <Typography className="form-control-plaintext">test</Typography>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Email</label>
              <div className="col-sm-8">
                <Typography className="form-control-plaintext">
                  test@test.com
                </Typography>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Teacher Contact Number
              </label>
              <div className="col-sm-8">
                <Typography className="form-control-plaintext">
                  0128209321
                </Typography>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Teaching Subject
              </label>
              <div className="col-sm-8">
                <Typography className="form-control-plaintext">
                  English
                </Typography>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Teacher Percentage
              </label>
              <div className="col-sm-8">
                <Typography className="form-control-plaintext">20</Typography>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <hr className={classes.hr} />
      <Card className={classes.root} elevation={1}>
        <CardContent>
          <from>
            <Typography variant="h5" className={clsx(classes.margin)}>
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
                  value={teacherBatch}
                  onChange={(e) => setTeacherBatch(e.target.value)}
                />
              </div>
              <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  value={teacherPrice}
                  onChange={(e) => setTeacherPrice(e.target.value)}
                />
              </div>
              <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                <label>Education Board</label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  value={teacherEducationboard}
                  onChange={(e) => setTeacherEducationboard(e.target.value)}
                >
                  <option selected>Choose...</option>
                  <option value="Cam">Cambrige</option>
                  <option value="Ede">Edexcel</option>
                </select>
              </div>
              <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                <label>Grade</label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  value={teacherGrade}
                  onChange={(e) => setTeacherGrade(e.target.value)}
                >
                  <option selected>Choose...</option>
                  <option value="O-Level">O-Level</option>
                  <option value="A-Level">A-Level</option>
                  <option value="A2">A2</option>
                </select>
              </div>
              <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                <label>Subject</label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  value={teachingSubject}
                  onChange={(e) => setTeachingSubject(e.target.value)}
                >
                  <option selected>Choose...</option>
                  <option value="Phy">Physical</option>
                  <option value="Mat">Math</option>
                  <option value="Eng">English</option>
                </select>
              </div>
              <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                <label>Schedule</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Schedule"
                  value={teacherSchedule}
                  onChange={(e) => setTeacherSchedule(e.target.value)}
                />
              </div>
              <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                <label>Expected Students</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Expected Students"
                  value={teacherExpectedStudents}
                  onChange={(e) => setTeacherExpectedStudents(e.target.value)}
                />
              </div>
              <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    label="Start Date"
                    value={teacherStartDate}
                    onChange={handleStartDateChange}
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
                    format="MM/dd/yyyy"
                    margin="normal"
                    label="End Date"
                    value={teacherEndDate}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <Button
                variant="contained"
                className={clsx(classes.margin)}
                style={{
                  background: '#1de9b6',
                  marginTop: '2em',
                  marginLeft: '0.5em',
                }}
                onClick={handleAddRow}
                disabled={
                  teacherBatch.length === 0 ||
                  teacherPrice.length === 0 ||
                  teacherEducationboard.length === 0 ||
                  teacherGrade.length === 0 ||
                  teachingSubject.length === 0 ||
                  teacherSchedule.length === 0 ||
                  teacherExpectedStudents.length === 0
                }
              >
                Submit
              </Button>
            </div>
          </from>
        </CardContent>
      </Card>
      <hr className={classes.hr} />
      <Typography
        variant="h6"
        style={{ marginBottom: '2rem' }}
        className={clsx(classes.margin)}
      >
        All Batches under test
      </Typography>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Schedule</th>
            <th scope="col">Batch Name</th>
            <th scope="col">Price TK/=</th>
            <th scope="col">Expected Students</th>
            <th scope="col">Active Students</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teacherdetails.map((item, index) => (
            <tr id="addr" key={index}>
              <td>#</td>
              <td>{item.teacherSchedule}</td>
              <td>
                {item.teachingSubject +
                  '-' +
                  item.teacherEducationboard +
                  '-' +
                  item.teacherGrade +
                  '-' +
                  twoDigitYear}
              </td>
              <td>{item.teacherPrice}</td>
              <td>{item.teacherExpectedStudents}</td>
              <td>Active Students</td>
              <td>{item.teacherStartDate}</td>
              <td>{item.teacherEndDate}</td>
              <td>
                <Button
                  type="button"
                  outline="false"
                  style={{ color: 'green' }}
                  // onClick={handleOpen}
                >
                  Edit
                </Button>
                <Button
                  type="button"
                  outline="false"
                  color="secondary"
                  // data-toggle="modal"
                  // data-target="#exampleModal"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Grid>
  );
}
