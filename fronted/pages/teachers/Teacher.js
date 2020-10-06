import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  DialogContent,
  DialogContentText,
  Input,
  Paper,
  useMediaQuery,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TeacherPhoto from '../../src/image/teacher/teacherPhoto';
import TeacherNID from '../../src/image/teacher/teacherNID';
import TeacherLastCertificate from '../../src/image/teacher/teacherlastCertificate';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: '2em',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function allStudents() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [teacherName, setTeacherName] = React.useState('');
  const [teacherEmail, setTeacherEmail] = React.useState('');
  const [teacherContactNumber, setTeacherContactNumber] = React.useState('');
  const [teacherSubject, setTeacherSubject] = React.useState('');
  const [teacherPercentage, setTeacherPercentage] = React.useState('');
  const [teacherPhoto, setTeacherPhoto] = React.useState(null);
  const [teacherNIDPhoto, setTeacherNIDPhoto] = React.useState();
  const [teacherLastEduCerPhoto, setTeacherLastEduCerPhoto] = React.useState();
  const [teacherRows, setTeacherRows] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddRow = (e) => {
    e.preventDefault();

    let item = {
      sn: teacherRows.length + 1,
      teacherName,
      teacherSubject,
    };
    setTeacherRows([...teacherRows, item]);
  };

  const handleRemoveSpecificRow = (item) => () => {
    // const teacherRows = [...teacherRows];
    // teacherRows.splice(index, 1);
    // setTeacherRows(teacherRows);
    let items = teacherRows.filter((row) => row.sn != item.sn);
    setTeacherRows(items);
  };

  const update = (item) => {
    console.log(
      `update (works in inside but doesn't display if connection to backend)`
    );
  };

  return (
    <Grid style={{ marginTop: '6em' }}>
      <Typography variant="h4">Teacher</Typography>
      <hr style={{ marginTop: 0, marginBottom: 0 }} />
      <Container component="main">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginBottom: '1em' }}
          >
            Add Teacher
          </Typography>
          <form className={classes.form}>
            <div className="form-group row">
              <label className="col-sm-4">
                <Grid item container spacing={2} item xs={12}>
                  <Input
                    fullWidth
                    className={clsx(classes.margin)}
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    placeholder="Teacher Name"
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <Input
                    className={clsx(classes.margin)}
                    fullWidth
                    value={teacherEmail}
                    onChange={(e) => setTeacherEmail(e.target.value)}
                    placeholder="Teacher Email Address"
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <Input
                    className={clsx(classes.margin)}
                    fullWidth
                    value={teacherContactNumber}
                    onChange={(e) => setTeacherContactNumber(e.target.value)}
                    placeholder="Teacher Contact Number"
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <Input
                    className={clsx(classes.margin)}
                    fullWidth
                    value={teacherSubject}
                    onChange={(e) => setTeacherSubject(e.target.value)}
                    placeholder="Teacher Subject"
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <Input
                    className={clsx(classes.margin)}
                    fullWidth
                    value={teacherPercentage}
                    onChange={(e) => setTeacherPercentage(e.target.value)}
                    placeholder="Teacher Percentage"
                  />
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <Grid container spacing={2} item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    className={clsx(classes.margin)}
                    style={{
                      background: '#1de9b6',
                      marginTop: '2em',
                      marginLeft: '0.5em',
                    }}
                    onClick={handleAddRow}
                    disabled={
                      teacherName.length === 0 ||
                      teacherEmail.length === 0 ||
                      teacherContactNumber.length === 0 ||
                      teacherSubject.length === 0 ||
                      teacherPercentage.length === 0
                    }
                  >
                    Submit
                  </Button>
                </Grid>
              </label>
              <div
                className="row"
                style={{ marginLeft: '1.2em', marginTop: '0.6em' }}
              >
                <TeacherPhoto
                  value={teacherPhoto}
                  onChange={(e) => setTeacherPhoto(e.target.value)}
                />
                <TeacherNID
                  value={teacherNIDPhoto}
                  onChange={(e) => setTeacherNIDPhoto(e.target.value)}
                />
                <TeacherLastCertificate
                  value={teacherLastEduCerPhoto}
                  onChange={(e) => setTeacherLastEduCerPhoto(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2"></label>
            </div>
          </form>
        </Paper>
      </Container>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Teacher sl</th>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teacherRows.map((item, index) => (
            <tr id="addr" key={index}>
              <td>#</td>
              <td>{item.sn}</td>
              <td>{item.teacherName}</td>
              <td>{item.teacherSubject}</td>
              <td>
                <Button
                  type="button"
                  outline="false"
                  style={{ color: '#7c4dff' }}
                >
                  <Link href="/teachers/teacherdetails">
                    <a>Details</a>
                  </Link>
                </Button>
                <Button
                  type="button"
                  outline="false"
                  style={{ color: 'green' }}
                  onClick={handleOpen}
                >
                  Edit
                </Button>
                <Button
                  type="button"
                  outline="false"
                  color="secondary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {' '}
          Are you sure you want to edit!, please think what you are doing?
        </DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                Teacher Name
              </Typography>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  id="standard-uncontrolled"
                  className={clsx(classes.margin)}
                  placeholder="School Name"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                />
              </Grid>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                Subject
              </Typography>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  id="standard-uncontrolled"
                  className={clsx(classes.margin)}
                  placeholder="School Name"
                  value={teacherSubject}
                  onChange={(e) => teacherSubject(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ margin: '0.5em' }}
          >
            Cancel
          </Button>
          {teacherRows.map((item, index) => (
            <Button
              key={index}
              onClick={update}
              autoFocus
              style={{ margin: '0.5em', background: 'green' }}
            >
              Update
            </Button>
          ))}
        </DialogActions>
      </Dialog>

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
                Are you sure you want to delete? After that you can not get it
                back!
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
              {teacherRows.map((item, index) => (
                <Button
                  key={index}
                  autoFocus
                  style={{ margin: '0.5em', background: 'red' }}
                  onClick={handleRemoveSpecificRow(item)}
                >
                  Delete
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
